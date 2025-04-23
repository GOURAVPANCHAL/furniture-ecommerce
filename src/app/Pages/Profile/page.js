"use client"
import { useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import './profile.css'
import pic1 from '@/app/Components/assets/icon1.jpg'
import pic2 from '@/app/Components/assets/icon2.webp'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [avatar, setAvatar] = useState('/User.jpg') // default avatar
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setAvatar(imageURL)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo />
      case 'orders':
        return <Orders />
      case 'address':
        return <Address />
      case 'settings':
        return <Settings />
      default:
        return null
    }
  }

  return (
    <>
      <Head>
        <title>Admin Profile UI</title>
      </Head>
      <div className="container-fluid profile-layout">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 sidebar p-4 text-white d-flex flex-column justify-content-between">
            <div>
              <div className="text-center mb-4">
                <div className="profile-avatar-container">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={90}
                    height={90}
                    className="rounded-circle profile-avatar mb-2"
                  />
                  <div className="change-icon" onClick={triggerFileInput}>+</div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </div>
                <h6 className="mb-0">Mukesh Mahar</h6>
                <small>mukeshmahar00@gmail.com</small><br />
                <small>Delhi India</small>
              </div>

              <ul className="nav flex-column mt-4">
                <li className="nav-item" onClick={() => setActiveTab('profile')}>
                  <a className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}>
                    🧍 Profile Info
                  </a>
                </li>
                <li className="nav-item" onClick={() => setActiveTab('orders')}>
                  <a className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}>
                    📦 Orders
                  </a>
                </li>
                <li className="nav-item" onClick={() => setActiveTab('address')}>
                  <a className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}>
                    📍 Address
                  </a>
                </li>
                <li className="nav-item" onClick={() => setActiveTab('settings')}>
                  <a className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}>
                    ⚙️ Settings
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button className="btn btn-danger btn-sm w-100 mt-4">Logout</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 content-area p-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}

// Components
const ProfileInfo = () => (
  <div className='container'>
 
 <h4 className='text-center'>Profile Info</h4>
     <ul className="list-group">
       <li className="list-group-item "><strong>Email : </strong> <span className="text-success"> mukeshmahar00@gmail.com</span></li>
       <li className="list-group-item"> <strong>Phone : </strong> <span className="text-warning"> 7827433944</span></li>
     </ul>
   
   
   

  </div>
)

const Orders = () => (
  <div className='d-flex flex-wrap'>
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Image src={pic1} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h5 className="card-title">Drawing Room Sofa</h5>
            <ul className="list-group">
              <b>Order No : M-T1265</b>
              <li className="list-group-item">12345 - ₹5000 - <span className="text-success">Delivered</span></li>
            </ul>
            <p className="card-text">This is a wider sofa with supporting and comfortable</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3 ms-2" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Image src={pic2} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Drawing Room Sofa</h5>
            <ul className="list-group">
              <b>Order No : M-T1299</b>
              <li className="list-group-item">12345 - ₹5000 - <span className="text-warning">Pending</span></li>
            </ul>
            <p className="card-text">This is a double bed with supporting and comfortable</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 18 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Address = () => (
  <div className='container'>
    <h4>Home Address </h4>
    <p> H-No : 127 2nd floor 14 Block New Ashok Nagar  new delhi : 110015   🏠 Delhi India</p>
  </div>
)

const Settings = () => (
  <div>
    <h4>⚙️ Account Settings</h4>
    <p>Change your password  email notifications and privacy settings.</p>
  </div>
)








