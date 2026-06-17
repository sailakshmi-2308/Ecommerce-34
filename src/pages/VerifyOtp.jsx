import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function VerifyOtp() {

const location=useLocation();
const tokenFromRegister=location.state?.token||""

  const [optData,setOtpData]=useState({
    otp:"",
    token:tokenFromRegister
  })
  
  return (
    <div>
      <form>

        <input type="text"
        placeholder="enter your otp"
        name="otp"
         value={optData.otp}
        />
       
       <button>verify OTP</button>
      </form>
    </div>
  )
}
