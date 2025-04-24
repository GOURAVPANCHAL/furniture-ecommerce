'use client';
import React, { useEffect } from 'react';
import './footer.css';
import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaWallet, FaLaptop, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';



const Footer = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 600 });
  // }, []);

  return (
    <footer className="footer">
      <div className="container Footersection">
        <div className="logoSection">
          <Image src="/logo.webp" alt="Manmohan Furnitures Logo" width={100} height={60} />
          <p className="logoText">
            Our website offers a wide range of products, including premium dupes that are not sold through authorized channels.
            However, we ensure top-notch quality at competitive prices, providing our customers with the best value.
          </p>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
          <div className='QuickLinkSec'>
          <h3 className="heading">Quick Links</h3>
            <ul className="list">
              <li><a href="/shop">Shop</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/order-status">Check Order Status</a></li>
              <li><a href="https://wa.me/your-number">Join WhatsApp Community</a></li>
              <li><a href="https://instagram.com/yourpage" target="_blank">Follow us on Instagram</a></li>
            </ul>
          </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
           <div className='BestSellersSec'>
           <h3 className="heading">Our Best Sellers</h3>
            <ul className="list innerListGrid">
              <li><a href="/products/vintage">Vintage</a></li>
              <li><a href="/products/hotpods">HotPods</a></li>
              <li><a href="/products/armani">Armani</a></li>
              <li><a href="/products/volcano">Volcano</a></li>
              <li><a href="/products/gshock">GShock</a></li>
            </ul>
           </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
           <div className='CategoriesSec'>
           <h3 className="heading">Our Categories</h3>
            <ul className="list innerListGrid">
              <li><a href="/category/earbuds">Earbuds & Headphones</a></li>
              <li><a href="/category/mobile-accessories">Mobile & Tablet Accessories</a></li>
              <li><a href="/category/men-watches">Men Wrist Watch</a></li>
              <li><a href="/category/women-watches">Women Wrist Watch</a></li>
              <li><a href="/category/massagers">Portable Massagers</a></li>
              <li><a href="/category/home-essentials">Home Essentials</a></li>
              <li><a href="/category/everyday">Everyday Essentials</a></li>
            </ul>
           </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
         <div className='InformationSec'>
         <h3 className="heading">More Information</h3>
            <ul className="list">
              <li><a href="/Pages/about-us">About Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/Pages/term-conditions">Terms & Conditions</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/Pages/contact-us">Contact Us</a></li>
            </ul>
         </div>
          </div>
        </div>


        <div className="footerBottomSec">
          <h4>We Accept</h4>
          <div className="bottomFlexWrapper">
            <div className="paymentsec">
              <a href="#" style={{ color: "brown" }} aria-label="Visa"><FaCcVisa className="fs-1" /></a>
              <a href="#" style={{ color: "darkblue" }} aria-label="MasterCard"><FaCcMastercard className="fs-1" /></a>
              <a href="#" style={{ color: "green" }} aria-label="Amex"><FaCcAmex className="fs-1" /></a>
              <a href="#" style={{ color: "black" }} aria-label="Wallet"><FaWallet className="fs-1" /></a>
              <a href="#" style={{ color: "#5b3917" }} aria-label="Net Banking"><FaLaptop className="fs-1" /></a>
            </div>

            <div className="SocialLinks d-grid">
              <div>
                <h4 className='fs-5'>Like What you see? Follow us here</h4>
              </div>
              <div>
                <a href="https://instagram.com/yourpage" className='instagramicon' target="_blank" aria-label="Instagram"><FaInstagramSquare className="fs-1 " /></a>
                <a href="https://facebook.com/yourpage" className='facebookicon' target="_blank" aria-label="Facebook"><FaFacebookSquare className="fs-1" /></a>
                <a href="https://twitter.com/yourpage" className='twittericon' target="_blank" aria-label="Twitter"><FaTwitterSquare className="fs-1" /></a>
                {/* <a href="https://instagram.com/yourpage" target="_blank" aria-label="Instagram Duplicate"><FaInstagramSquare className="fs-1" /></a> */}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <small>© {new Date().getFullYear()} Manmohan Furnitures. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
