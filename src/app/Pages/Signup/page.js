'use client'
import React, { useEffect, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import '../Login/login.css'

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    mobile: '',
    otp: ''
  })
  const [signupErrors, setSignupErrors] = useState({})
  const [otpSent, setOtpSent] = useState(false)
  const [sendingOtp, setSendingOtp] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleSignupChange = (e) => {
    const { name, value } = e.target
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const errors = {}

    if (!signupData.email) errors.email = 'Email is required.'
    if (!signupData.password) errors.password = 'Password is required.'
    if (!signupData.mobile || signupData.mobile.length < 10) errors.mobile = 'Valid mobile number is required.'
    if (!signupData.otp || signupData.otp.length < 4) errors.otp = 'Valid OTP is required.'

    setSignupErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log('Signup Data:', signupData)
      alert('Signup successful!')
    }
  }

  useEffect(() => {
    const sendOtp = () => {
      setSendingOtp(true)
      setSignupErrors(prev => ({ ...prev, email: '' }))

      setTimeout(() => {
        setSendingOtp(false)
        setOtpSent(true)
        alert('OTP sent to ' + signupData.email)
      }, 1500)
    }

    const email = signupData.email
    const shouldSendOtp = email && emailRegex.test(email) && !otpSent && !sendingOtp

    const timer = setTimeout(() => {
      if (shouldSendOtp) sendOtp()
    }, 800)

    return () => clearTimeout(timer)
  }, [signupData.email, otpSent, sendingOtp])

  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row'>
          {/* Signup Form */}
          <div className='col-md-6 offset-md-3 my-4'>
            <div className='login-form'>
              <h2 className='login-form-heading'>Complete Sign Up</h2>
              <form onSubmit={handleSignup}>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter Email Address'
                  name='email'
                  className='form-input mb-2'
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
                {signupErrors.email && <p className='text-danger'>{signupErrors.email}</p>}
                {sendingOtp && <p className='text-primary'>Sending OTP...</p>}
                {otpSent && !sendingOtp && <p className='text-success'>OTP Sent <FaRegCheckCircle /></p>}

                {otpSent && (
                  <>
                    <label htmlFor='otp'>OTP</label>
                    <input
                      type='number'
                      id='otp'
                      placeholder='Enter OTP Received On Your Mail Id'
                      name='otp'
                      className='form-input mb-2'
                      value={signupData.otp}
                      onChange={handleSignupChange}
                    />
                    {signupErrors.otp && <p className='text-danger'>{signupErrors.otp}</p>}
                  </>
                )}

                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Your Password'
                  name='password'
                  className='form-input mb-2'
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                {signupErrors.password && <p className='text-danger'>{signupErrors.password}</p>}

                <label htmlFor='mobile'>Mobile Number</label>
                <input
                  type='tel'
                  id='mobile'
                  placeholder='Enter Mobile Number'
                  name='mobile'
                  className='form-input mb-2'
                  value={signupData.mobile}
                  onChange={handleSignupChange}
                />
                {signupErrors.mobile && <p className='text-danger'>{signupErrors.mobile}</p>}

                <button type='submit' className='login-btn' disabled={sendingOtp}>
                  {sendingOtp ? 'Please Wait...' : 'Get Started'}
                </button>

                <div className='mt-4'>
                  <p className='login-form-text'>Have Trouble Signing Up ?<a href='#'> Get Help</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupPage
