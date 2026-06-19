import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {

    const {id}=useParams()
    const [product,setProduct]=useState(null)

    async function getProduct(){
        try{

           const result= await axios.get(`https://ecomflask.duckdns.org/api/admin/item/${id}`,{
            withCredentials:true
           })
            console.log(result.data)
            setProduct(result.data.product)
        }
        catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
    }

    useEffect(()=>{
        getProduct()
    },[])


    if(!product){

        return(
            <h1>Loadinggg....</h1>
        )
    }
  return (
    <div>
      <img src={product.image} alt={product.itemname}/>
      <h1>{product.itemname}</h1>
      <p>{product.item_desc}</p>
      <p>{product.item_about}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  )
}
