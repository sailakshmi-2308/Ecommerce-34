import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminProducts() {

  const [products,setProducts]=useState([])

  async function getData(){

    try{

      const result=await axios.get("https://ecomflask.duckdns.org/api/admin/items",
        {
          withCredentials:true
        }
      )
      console.log(result.data);
      setProducts(result.data.products)
      console.log(result.data.products)
   

    }
    catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }

  }

  useEffect(()=>{
    getData()
  },[])

  async function deleteProduct(id){
    try{
      await axios.delete(`https://ecomflask.duckdns.org/api/admin/delete-item/${id}`,{
        withCredentials:true
      })

    }
    catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }

  }

  return (
    <div>
      admin products

      <div>
        {
          products.map((item)=>(
            <div key={item.itemid}>

              <div>
                <img src={item.image} alt={item.itemname}/>

                <h2>{item.itemname}</h2>
                <p>{item.item_desc}</p>
                <p>{item.price}</p>
              </div>|

              <div>
              <Link to={`/single/${item.itemid}`}>View</Link>
              <Link to={`/edit/${item.itemid}`}>View</Link>
              <button onClick={()=>deleteProduct(item.itemid)}>
                Delete
                </button>
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}
