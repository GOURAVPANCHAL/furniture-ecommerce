import React from 'react';
import styles from './wishlist.css';
import { FaTrashAlt, FaFacebookF, FaTwitter, FaPinterestP, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import pic1 from '@/app/Components/assets/icon1.jpg'
import pic2 from '@/app/Components/assets/icon2.webp'
import pic3 from '@/app/Components/assets/icon3.webp'
import pic4 from '@/app/Components/assets/icon4.jpg'
import Image from 'next/image';

const wishlistItems = [
  {
    id: 1,
    name: "Wave t-shirt",
    image:"/icon1.jpg",
    price: "$14.99",
    discountPrice: "$13.49",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 2,
    name: "T-Shirt with Logo",
    image: "/icon2.webp",
    price: "$18.00",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 3,
    name: "Hiking shoes",
    image: "/icon3.webp",
    price: "$104.99",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: false,
  },
  {
    id: 4,
    name: "Blue man t-shirt",
    image:"/icon4.jpg",
    price: "$12.99 – $14.99",
    stock: "In Stock",
    date: "June 17, 2024",
    isVariable: true,
  },
];

const Wishlist = () => {
  return (
    <div className="container my-5">
      <table className={`table table-bordered ${styles.wishlistTable}`}>
        <thead>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Stock status</th>
            <th>Arrange</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map(item => (
            <tr key={item.id}>
              <td className="text-center">
                <input type="checkbox" className="form-check-input me-2" />
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
                    <span className="text-success fw-semibold">{item.discountPrice}</span>
                  </>
                ) : (
                  <span>{item.price}</span>
                )}
              </td>
              <td>
                <input type="number" defaultValue={1} className="form-control w-50" />
              </td>
              <td>
                <span>{item.stock}</span><br />
                <small>Added on: {item.date}</small><br />
                <button className="btn btn-sm btn-success mt-2">
                  {item.isVariable ? "Select options" : "Add to cart"}
                </button>
              </td>
              <td className="text-center">⇅</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex align-items-center gap-2 my-4">
        <select className="form-select w-auto">
          <option>Add to cart</option>
          <option>Remove</option>
        </select>
        <button className="btn btn-outline-success">APPLY</button>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-flex gap-3 align-items-center">
          <strong>Share on:</strong>
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaEnvelope />
          <FaWhatsapp />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-light border">📩 ASK FOR AN ESTIMATE</button>
          <button className="btn btn-success">ADD ALL TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
