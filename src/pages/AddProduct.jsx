import React from 'react'

export default function AddProduct() {

    const [formData,setFormData]=useState({

        title:"",
        Description:"",
        About_item:"",
        quantity:"",
        price:"",
        category
    })

    const [file,setFile]=useState(null)

    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      }

      )

    }
  return (
    <div>
    <form>


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



    </form>
    </div>
  )
}
