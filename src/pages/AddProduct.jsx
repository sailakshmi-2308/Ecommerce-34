import React,{useState} from 'react'
import axios from 'axios'

export default function AddProduct() {

    const [formData,setFormData]=useState({

        title:"",
        Description:"",
        About_item:"",
        quantity:"",
        price:"",
        category:""
    })

    const [file,setFile]=useState(null)

    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      }

      )

    }

    async function handleSubmit(e){
      e.preventDefault();
       try{

        const data=new FormData();
        data.append("title",formData.title);
        data.append("Description",formData.Description)
        data.append("About_item",formData.About_item)
        data.append("quantity",formData.quantity)
        data.append("price",formData.price)
         data.append("category",formData.category)
         data.append("file",file)


         const result=await axios.post("https://ecomflask.duckdns.org/api/admin/add-item",data,
          {
            withCredentials:true,
            headers:{
              "Content-Type": "multipart/form-data"
            }
          }
         )

         console.log(result.data)
         alert("product added successfully")

         setFormData({
          title:"",
        Description:"",
        About_item:"",
        quantity:"",
        price:"",
        category:""
         })

         setFile(null)


       }
       catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>


        <div>
            <label htmlFor="">Product title</label>
            <input type="text" 
            placeholder="enter product title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />
        </div>
         <div>
            <label htmlFor="">Product Description</label>
            <input type="text" 
            placeholder="enter product Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            />
        </div>
         <div>
            <label htmlFor="">About_item </label>
            <input type="text" 
            placeholder="enter About_item"
            name="About_item"
            value={formData.About_item}
            onChange={handleChange}
            />
        </div>
         <div>
            <label htmlFor="">quantity </label>
            <input type="text" 
            placeholder="enter product quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            />
        </div>
         <div>
            <label htmlFor="">price</label>
            <input type="text" 
            placeholder="enter product price "
            name="price"
            value={formData.price}
            onChange={handleChange}
            />
        </div>
         <div>
            <label htmlFor="">Product category</label>
            <input type="text" 
            placeholder="enter product category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            />
        </div>

          <div>
            <label htmlFor="">upload product image</label>
            <input type="file" 
            onChange={(e)=>setFile(e.target.files[0])}
            />
        </div>


<button>
  Add Product
</button>
    </form>
    </div>
  )
}
