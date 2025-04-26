"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './productdetail.css'
import { IoCallOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import Product from "@/app/Components/Products/product"
const Page = () => {
    const [product, setProduct] = useState(null);
    const URL = 'https://fakestoreapi.com/products/1';

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                console.log("Product:", response.data);
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, []);

    const settings = {
        customPaging: function () {
            return (
                <a>
                    {product?.image && (
                        <img
                            src={product.image}
                            alt={product.title || "Product image"}
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    )}
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <nav aria-label="breadcrumb" className="pretty-breadcrumb">
                <div className="container">
                    <ol className="breadcrumb align-items-center">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <span className="breadcrumb-link">Home</span>
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href="/Pages/products">
                                <span className="breadcrumb-link">Products</span>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Product Details
                        </li>
                    </ol>
                </div>
            </nav>

            <div className='product-details'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="slider-container">
                                {product && (
                                    <Slider {...settings}>
                                        <div className="slide">
                                            <img
                                                src={product.image}
                                                alt={product.title || "Product image"}
                                                width={500}
                                                height={500}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Slider>
                                )}
                            </div>
                        </div>

                        <div className='col-md-6'>
                            {product && (
                                <div className='product-details-content'>
                                    <h2 className='details-heading'>{product.title}</h2>
                                    <p className='detail-description'>{product.description}</p>
                                    <hr />
                                    <div className='price-section'>
                                        <p className='final-price'> ₹{product.price}</p>
                                        <p className='price'><del>MRP ₹{product.price}</del></p>
                                        <p className='discount'>{product.price}% OFF</p>
                                    </div>
                                    <div className='product-overview'>
                                        <h3>Product Overview</h3>
                                        <hr />
                                        <ul className='overview-list'>
                                            <li><strong>Category :</strong> {product.category}</li>
                                            <li><strong>Rating :</strong> {product.rating?.rate} ({product.rating?.count} reviews)</li>
                                            <li><strong>Stock :</strong> {product.stock ? "In Stock" : "Out of Stock"}</li>
                                        </ul>
                                        <div className='product-details-cart-button'>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                            <button className='buy-now'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* You can render product details here
              {product && (
                <>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>
                </>
              )} */}
                        </div>
                    </div>
                    <hr />
                    <div className='container'>
                        <div className='cal-contact-section'>
                            <h2>Need Help in Buying?</h2>
                            <Link className='request-call' href="tel:+919319846114">Request A Call Back</Link>
                            <p>
                                Or
                            </p>
                            <div className='call-main'>
                                <div className='calling-main'>
                                    <IoCallOutline className='icn' />
                                    <div>
                                        <p>
                                            Call Us
                                        </p>
                                        <Link href="tel:+919319846114">+91 9319846114</Link>
                                    </div>
                                </div>
                                <p className='call-line'>
                                    |
                                </p>
                                <div className='calling-main'>
                                    <TbMessages className='icn' />
                                    <div>
                                        <p>
                                            Live Chat
                                        </p>
                                        <Link href="#">Talk To Expert</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                    <Product />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
