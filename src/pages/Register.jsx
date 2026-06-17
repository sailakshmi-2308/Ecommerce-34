import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigate=useNavigate()

  const [registerData,setRegisterData]=useState({
    username:"",
    useremail:"",
    useraddress:"",
    userpassword:"",
    useragree:false
    
  })
  function handleChange(event){
    const {name,value,type,checked}=event.target
    // console.log(event)

    setRegisterData({
          ...registerData,
          [name]:type==="checkbox"?checked:value
    }
    )
  }

  async function handleSubmit(e){
    e.preventDefault();

    try{

      const result=await axios.post("https://ecomflask.duckdns.org/api/admin/register",registerData)
      console.log(result.data)
      alert("otp snet succefully")
      navigate("/verify-otp",{
        state:{
          token:result.data.token
        }
      })


    }
    catch(error){
      console.log("error response:",error.response)

      console.log(error.response?.data||error.message)

    }


  }

  return (
    <div>
      <h1>Registere Here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text"
            placeholder='enter your username'
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Email Address</label>
          <input type="text"
            placeholder='enter your email'
            name="useremail"
            value={registerData.useremail}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">UserAddress</label>
          <input type="text"
            placeholder='enter your useraddress'
            name="useraddress"
            value={registerData.useraddress}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password"
            placeholder='enter your password'
            name="userpassword"
            value={registerData.userpassword}
            onChange={handleChange}
          />
        </div>

        <div>

          <input type="checkbox"
            name="useragree"
            onChange={handleChange}
            checked={registerData.useragree}
          />
          <label htmlFor="">I agree to the Terms & Conditions</label>
        </div>

        <button>Register</button>
      </form>
    </div>
  )
}
