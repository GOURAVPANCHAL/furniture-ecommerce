'use client'
import React, { useEffect, useState } from 'react'
import './login.css'
import Image from 'next/image'
import google from '@/app/Components/assets/google.png'
import facebook from '@/app/Components/assets/facebook.png'
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link'
const Page = () => {
  const [loginInput, setLoginInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()
    if (!loginInput) {
      setLoginError('Please enter mobile number or email.')
    } else {
      setLoginError('')
      console.log('Login Input:', loginInput)
    }
  }

  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row'>
          {/* Login Form */}
          <div className='col-md-6 offset-md-3 my-4'>
            <div className='login-form'>
              <h2 className='login-form-heading'>Sign Up Or Log In</h2>
              <form onSubmit={handleLogin}>
                <input
                  type='text'
                  placeholder='Enter Mobile Number Or Email Id'
                  className='form-input mb-2'
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                />
                {loginError && <p className='text-danger'>{loginError}</p>}
                <button type='submit' className='login-btn'>Continue</button>
                <Link href="/Pages/ForgotPassword">forgot password</Link>
                <div>
                  <p className='login-form-text'>By continuing, you agree to our <a href='#'>Terms of Conditions</a></p>
                  <p className='text-center'>
                    Or
                    <br />
                    Continue With
                  </p>
                  <button type='button' className='google-btn'>
                    <Image src={google} alt='Google' className='google-icon' /> Sign In With Google
                  </button>
                  <button type='button' className='google-btn m-0'>
                    <Image src={facebook} alt='facebook' className='google-icon' /> Sign In With Facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
