import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {


  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:'',
    password:""
  })

  function handleChange(e){

    setFormData({

      ...formData,
      [e.target.name]:e.target.value
    })

  }

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const result=await axios.post("https://ecomflask.duckdns.org/api/admin/login",formData,
      {
        withCredentials:true
      }
    )
    console.log(result.data)

    localStorage.setItem("admin",JSON.stringify(result.data.admin))

    navigate("/dashboard")

    }catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }



  }
  return (
    <div>
     <h1>Pleast Login here</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="enter email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      />

      <input type="password" 
      placeholder="enter password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      />
  <button>Login</button>

     </form>
    </div>
  )
}
