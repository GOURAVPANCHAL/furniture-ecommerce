"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const dropdownContent = {
  Furniture: {
    title: "Furniture Collection",
    columns: [
      ["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor"],
      ["Kids Furniture", "Accent Furniture", "Entertainment", "Bar Furniture", "Commercial"],
      ["Bookcases", "Cabinets", "Shelving", "Room Dividers", "Wall Units"],
      ["Furniture Sets", "Recliners", "Rocking Chairs", "Futons", "Ottomans"],
      ["Beds", "Dressers", "Nightstands", "Wardrobes", "Armoires"],
      // ["Sofa Beds", "Daybeds", "Bunk Beds", "Trundle Beds", "Canopy Beds"]
    ]
  },
  "Sofas & Seating": {
    title: "Sofas & Seating Collection",
    columns: [
      ["Sofas", "Sectionals", "Sleeper Sofas", "Loveseats", "Chaise Lounges"],
      ["Recliners", "Accent Chairs", "Armchairs", "Rocking Chairs", "Swivel Chairs"],
      ["Ottomans", "Benches", "Stools", "Poufs", "Bean Bags"],
      ["Sofa Beds", "Daybeds", "Futons", "Convertibles", "Murphy Chairs"],
      ["Outdoor Seating", "Patio Chairs", "Garden Benches", "Porch Swings", "Hammocks"],
      // ["Office Chairs", "Gaming Chairs", "Bar Stools", "Counter Stools", "Dining Chairs"]
    ]
  },
  Mattresses: {
    title: "Mattress Collection",
    columns: [
      ["Memory Foam", "Innerspring", "Hybrid", "Latex", "Pillow Top"],
      ["Gel Memory Foam", "Airbed", "Waterbed", "Adjustable", "Orthopedic"],
      ["King Size", "Queen Size", "Full Size", "Twin Size", "California King"],
      ["Mattress Toppers", "Mattress Pads", "Protectors", "Encasements", "Foundations"],
      ["Pillows", "Bed Frames", "Box Springs", "Bunkie Boards", "Headboards"],
      // ["Kids Mattresses", "Guest Mattresses", "Luxury Mattresses", "Eco-Friendly", "Hypoallergenic"]
    ]
  },
  "Home Decor": {
    title: "Home Decor Collection",
    columns: [
      ["Wall Art", "Mirrors", "Clocks", "Decorative Accents", "Candles"],
      ["Vases", "Figurines", "Sculptures", "Decorative Bowls", "Trays"],
      ["Throw Pillows", "Blankets", "Throws", "Quilts", "Bedspreads"],
      ["Rugs", "Doormats", "Floor Mats", "Carpets", "Runners"],
      ["Curtains", "Drapes", "Blinds", "Shades", "Valances"],
      // ["Plants", "Planters", "Terrariums", "Floral Arrangements", "Wreaths"]
    ]
  },
  "Kitchen & Dining": {
    title: "Kitchen & Dining Collection",
    columns: [
      ["Dining Tables", "Dining Chairs", "Bar Stools", "Counter Stools", "Benches"],
      ["China Cabinets", "Buffets", "Sideboards", "Servers", "Carts"],
      ["Kitchen Islands", "Baker's Racks", "Pantry Storage", "Pot Racks", "Wine Racks"],
      ["Tableware", "Serveware", "Drinkware", "Flatware", "Barware"],
      ["Kitchen Storage", "Organizers", "Canisters", "Jars", "Containers"],
      // ["Kitchen Textiles", "Aprons", "Oven Mitts", "Towels", "Placemats"]
    ]
  }
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(0);

  const handleMouseEnter = (navItem, e) => {
    setActiveDropdown(navItem);
    const navbar = e.target.closest('.bottom-navbar');
    const navbarRect = navbar.getBoundingClientRect();
    const itemRect = e.target.getBoundingClientRect();
    setDropdownPosition(itemRect.left - navbarRect.left);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="main-navbar">
      {/* Top Navbar */}
      <div className="top-navbar d-flex justify-content-between align-items-center px-3 py-2 flex-wrap">
        <div className="left d-flex align-items-center gap-3 flex-wrap">
          <span><FaPhoneAlt className="fs-5 helpline" /> Helpline +91 98726XXXXX</span>
          <span className="fast-delivery"><TbTruckDelivery className="fs-3 helpline" /> Fast Delivery</span>
        </div>
        <div className="right d-flex align-items-center gap-3 flex-wrap">
          <span><FaPhoneAlt className="fs-5 helpline" /> +91-9314444747</span>
          <Link className="nav-link" href="#">Become a Franchise</Link>
          <Link className="nav-link" href="#">Track Order</Link>
          <Link className="nav-link" href="#">Help Center</Link>
        </div>
      </div>

      {/* Middle Navbar */}
      <div className="middle-navbar d-flex justify-content-between align-items-center px-3 py-3 flex-wrap">
        <div className="search-bar flex-grow-1 d-none d-md-block" style={{ maxWidth: "30%" }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products, Colors & More .."
            />
            <span className="input-group-text bg-white">
              <FaSearch className="helpline" />
            </span>
          </div>
        </div>
        <div className="logo text-center mx-auto">
          <Image src="/logo.webp" alt="Manmohan Furnitures" width={100} height={60} />
        </div>
        <div className="auth-section d-flex align-items-center justify-content-end gap-3" style={{ maxWidth: "30%" }}>
          <button className="btn btn-brown">SIGN UP / LOGIN</button>
          <div className="d-grid align-items-center">
            <IoIosPersonAdd />
          </div>
          <span> Profile</span>
          <span><FaHeart /> Wishlist (0)</span>
          <span><MdShoppingCart />Cart (0)</span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bottom-navbar navbar navbar-expand-lg navbar-light bg-light px-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {Object.keys(dropdownContent).map((navItem) => (
              <li 
                className="nav-item dropdown" 
                key={navItem}
                onMouseEnter={(e) => handleMouseEnter(navItem, e)}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="nav-link" href="#">{navItem}</Link>
                {activeDropdown === navItem && (
                  <div 
                    className="mega-dropdown"
                    onMouseEnter={() => setActiveDropdown(navItem)}
                    onMouseLeave={handleMouseLeave}
                    // style={{
                    //   left: `-${dropdownPosition}px`
                    // }}
                  >
                    <h4>{dropdownContent[navItem].title}</h4>
                    <div className="dropdown-grid">
                      {dropdownContent[navItem].columns.map((column, colIndex) => (
                        <div className="dropdown-column" key={colIndex}>
                          {column.map((item, itemIndex) => (
                            <Link href="#" className="dropdown-item" key={itemIndex}>{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            {/* Non-dropdown items */}
            <li className="nav-item"><Link className="nav-link" href="#">Furnishings</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#">Lamps & Lighting</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#">Luxury</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#">Modular</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { IoCall } from "react-icons/io5";
// import { FcOnlineSupport } from "react-icons/fc";
// import { TbTruckDelivery } from "react-icons/tb";

// const Page = () => {
//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
//         <div className="container-fluid d-flex justify-content-between align-items-center px-3 flex-wrap">

//           {/* Left links */}
//           <div className="d-flex flex-wrap align-items-center gap-3">
//             {["Furniture", "Door", "Building Material", "Projects", "Full Home Customisation"].map((text, idx) => (
//               <Link href="#" key={idx} className={`nav-link ${text === "Furniture" ? 'active text-danger border border-danger rounded-pill px-3' : 'text-muted'}`}>
//                 {text}
//               </Link>
//             ))}
//           </div>

//           {/* Center logo */}
//           <div className="mx-auto d-none d-lg-block position-absolute start-50 translate-middle-x">
//             <Image src="/logo.webp" alt="Logo" width={100} height={60} />
//           </div>

//           {/* Right section */}
//           <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0 ">
//             <Link href="#" className="text-muted text-decoration-none"><i className="bi bi-diagram-3  me-1" />Franchisee</Link>
//             <Link href="#" className="text-muted text-decoration-none"><IoCall className='fs-5 me-2' />1800 22 3242</Link>
//             <Link href="#" className="text-muted text-decoration-none"><FcOnlineSupport className='fs-5 me-2' />Support</Link>
//             <Link href="#" className="text-muted text-decoration-none"><TbTruckDelivery className='fs-5  me-2' />Track Your Order</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Bottom Navbar */}
//       <nav className="navbar bg-white border-bottom px-3">
//         <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">

//           {/* Category Links */}
//           <div className="d-flex flex-wrap gap-3">
//             {["Living", "Dining", "Bedroom", "Sofas", "Storage", "Office", "New Arrivals", "Offer"].map((item, i) => (
//               <Link key={i} href="#" className="nav-link fw-medium text-dark">
//                 {item}
//               </Link>
//             ))}
//           </div>

//           {/* Search + Icons */}
//           <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
//             <input type="text" className="form-control rounded-pill px-3" placeholder="Search" style={{ width: 200 }} />
//             <i className="bi bi-geo-alt" />
//             <i className="bi bi-person" />
//             <i className="bi bi-heart-fill text-danger" />
//             <i className="bi bi-cart3" />
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Page;
