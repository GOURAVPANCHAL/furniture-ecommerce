'use client';
import React, { useEffect } from 'react';
import './footer.css';
import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaWallet, FaLaptop, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';



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
          <div className="col-md-3 col-6 mb-4">
          <div className='QuickLinkSec'>
          <h3 className="heading">Quick Links</h3>
            <ul className="list">
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="Components/faqs">FAQs</Link></li>
              {/* <li><Link href="/order-status">Check Order Status</Link></li> */}
              <li><Link href="https://wa.me/your-number">Join WhatsApp Community</Link></li>
              <li><Link href="https://instagram.com/yourpage" target="_blank">Follow us on Instagram</Link></li>
            </ul>
          </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
           <div className='BestSellersSec'>
           <h3 className="heading">Our Best Sellers</h3>
            <ul className="list innerListGrid">
              <li><Link href="/products/vintage">Vintage</Link></li>
              <li><Link href="/products/hotpods">HotPods</Link></li>
              <li><Link href="/products/armani">Armani</Link></li>
              <li><Link href="/products/volcano">Volcano</Link></li>
              <li><Link href="/products/gshock">GShock</Link></li>
            </ul>
           </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
           <div className='CategoriesSec'>
           <h3 className="heading">Our Categories</h3>
            <ul className="list innerListGrid">
              <li><Link href="/category/earbuds">Earbuds & Headphones</Link></li>
              <li><Link href="/category/mobile-accessories">Mobile & Tablet Accessories</Link></li>
              <li><Link href="/category/men-watches">Men Wrist Watch</Link></li>
              <li><Link href="/category/women-watches">Women Wrist Watch</Link></li>
              <li><Link href="/category/massagers">Portable Massagers</Link></li>
              <li><Link href="/category/home-essentials">Home Essentials</Link></li>
              <li><Link href="/category/everyday">Everyday Essentials</Link></li>
            </ul>
           </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
         <div className='InformationSec'>
         <h3 className="heading">More Information</h3>
            <ul className="list">
              <li><Link href="/Pages/about-us">About Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/Pages/term-conditions">Terms & Conditions</Link></li>
              <li><Link href="/returns">Returns & Exchanges</Link></li>
              <li><Link href="/Pages/contact-us">Contact Us</Link></li>
            </ul>
         </div>
          </div>
        </div>


        <div className="footerBottomSec">
          <h4>We Accept</h4>
          <div className="bottomFlexWrapper">
            <div className="paymentsec">
              <Link href="#" style={{ color: "brown" }} aria-label="Visa"><FaCcVisa className="fs-1" /></Link>
              <Link href="#" style={{ color: "darkblue" }} aria-label="MasterCard"><FaCcMastercard className="fs-1" /></Link>
              <Link href="#" style={{ color: "green" }} aria-label="Amex"><FaCcAmex className="fs-1" /></Link>
              <Link href="#" style={{ color: "black" }} aria-label="Wallet"><FaWallet className="fs-1" /></Link>
              <Link href="#" style={{ color: "#5b3917" }} aria-label="Net Banking"><FaLaptop className="fs-1" /></Link>
            </div>

            <div className="SocialLinks d-grid">
              <div>
                <h4 className='fs-5'>Like What you see? Follow us here</h4>
              </div>
              <div>
                <Link href="https://instagram.com/yourpage" className='instagramicon' target="_blank" aria-label="Instagram"><FaInstagramSquare className="fs-1 " /></Link>
                <Link href="https://facebook.com/yourpage" className='facebookicon' target="_blank" aria-label="Facebook"><FaFacebookSquare className="fs-1" /></Link>
                <Link href="https://twitter.com/yourpage" className='twittericon' target="_blank" aria-label="Twitter"><FaTwitterSquare className="fs-1" /></Link>
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
