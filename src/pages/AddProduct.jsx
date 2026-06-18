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

    function handleChange(){

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



    </form>
    </div>
  )
}
