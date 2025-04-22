"use client"
import React, { useState } from 'react'
import './contactus.css'
import logo from "../../../../public/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            console.log('Submitted:', formData);
        }
        setValidated(true);
    };

    return (
        <>
            <nav aria-label="breadcrumb" className="pretty-breadcrumb">
  <div className="container">
    <ol className="breadcrumb align-items-center">
      <li className="breadcrumb-item">
        <Link href="/">
        <span className="breadcrumb-link"> Home</span>
        </Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
         Contact Us
      </li>
    </ol>
  </div>
</nav>


            <div className='contactUs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='contact-details'>
                                <Image src={logo} alt="Logo" className='logo' />
                                <p className='contact-mail'>
                                    <Link href="mailto:info.manmohanfurniture@gmail.com"> <IoIosMailOpen /> info.manmohanfurniture@gmail.com</Link>
                                </p>
                                <p className='contact-phone'>
                                    <IoCall />
                                    <Link href="tel:+919250027213"> (+91) 9250 027 213</Link>
                                    <Link href="tel:+919868487598"> (+91) 9868 487 598</Link>
                                </p>
                                <address>
                                    <FaLocationDot />  4, Captain Risal Singh Marg, New Roshan Pura Extn, Najafgarh, Delhi, 110043
                                </address>
                                <div className="SocialLinks d-grid">
                                    <div>
                                        <h4 className='fs-5'>Like What you see? Follow us here</h4>
                                    </div>
                                    <div>
                                        <a href="https://instagram.com/yourpage" className='instagramicon' target="_blank" aria-label="Instagram"><FaInstagramSquare className="fs-1 " /></a>
                                        <a href="https://facebook.com/yourpage" className='facebookicon' target="_blank" aria-label="Facebook"><FaFacebookSquare className="fs-1" /></a>
                                        <a href="https://twitter.com/yourpage" className='twittericon' target="_blank" aria-label="Twitter"><FaTwitterSquare className="fs-1" /></a>
                                        <a href="https://instagram.com/yourpage" target="_blank" aria-label="Instagram Duplicate"><FaInstagramSquare className="fs-1" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contactCard">
                                <h2 className="text-center mb-4">Get in Touch</h2>
                                <form noValidate className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="invalid-feedback">Please enter your full name.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="invalid-feedback">Please enter a valid email.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="invalid-feedback">Please enter a subject.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        <div className="invalid-feedback">Please enter your message.</div>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page