
import React from 'react';
import styles from './wishlist.css';
import { FaTrashAlt, FaFacebookF, FaTwitter, FaPinterestP, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHeartEmpty } from "react-icons/io";

const wishlistItems = [
  {
    id: 1,
    name: "Sofa Set",
    image:"/icon1.jpg",
    price: "$14.99",
    discountPrice: "$13.49",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 2,
    name: "sofa cum Bed",
    image: "/icon2.webp",
    price: "$18.00",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 3,
    name: "Book Selves",
    image: "/icon3.webp",
    price: "$104.99",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 4,
    name: "Coffee Table",
    image:"/icon4.jpg",
    price: "$12.99 – $14.99",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: true,
  },
];

const page = () => {
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
                        <li className="breadcrumb-item active" aria-current="page">
                            Wishlist
                        </li>
                    </ol>
                </div>
            </nav>
            <div className='wishtlist-main'>
    <div className="container">
      <div className='wishlist-heading'>
        <IoIosHeartEmpty />
        <h1>My Wishlist</h1>
      </div>
      <div className='wishlist-table'>
      <table className={`table table-bordered ${styles.wishlistTable}`}>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Product name</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Stock status</th>
            {/* <th>Arrange</th> */}
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map(item => (
            <tr key={item.id}>
              <td className="text-center">
                <FaTrashAlt className={styles.trashIcon} />
              </td>
              <td className="d-flex align-items-center gap-3">
                <Image src={item.image} width={60} height={60} alt={item.name} className={styles.productImg} />
                {item.name}
              </td>
              <td>
                {item.discountPrice ? (
                  <>
                    <del className="text-muted me-2">{item.price}</del>
                    <span className="wishlistText fw-semibold">{item.discountPrice}</span>
                  </>
                ) : (
                  <span>{item.price}</span>
                )}
              </td>
              <td>
                <input type="number" defaultValue={1} className="form-control w-50"  style={{background : "#fafafa"}} />
              </td>
              <td>
                <span>{item.stock}</span><br />
                <small>Added on: {item.date}</small><br />
                <button className="btn btn-sm  text-light mt-2" style={{background : "#6e4a1e"}}>
                  {item.isVariable ? "Select options" : "Add to cart"}
                </button>
              </td>
              {/* <td className="text-center">⇅</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <div className="d-flex align-items-center gap-2 my-4">
        <select className="form-select w-auto">
          <option>Add to cart</option>
          <option>Remove</option>
        </select>
        <button className="btn text-light"  style={{background : "#6e4a1e"}} >APPLY</button>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-flex gap-3 align-items-center">
          <strong>Share on:</strong>
          <FaFacebookF className='fs-3' />
          <FaTwitter className='fs-3' />
          <FaPinterestP className='fs-3' />
          <FaEnvelope  className='fs-3'/>
          <FaWhatsapp  className='fs-3'/>
        </div>
        <div className="d-flex gap-2">
          <button className="btn text-light" style={{background : "#6e4a1e"}}>ADD ALL TO CART</button>
        </div>
      </div>
    </div>
            </div>
    </>
  );
};

export default page;