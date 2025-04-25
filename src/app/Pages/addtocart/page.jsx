'use client';
import React, { useState, useEffect } from "react";
import "./cart.css";
import Image from "next/image";
import pic1 from '@/app/Components/assets/icon6.webp';
import pic2 from '@/app/Components/assets/icon7.webp';

const initialCart = [
  {
    id: 1,
    image: pic1,
    name: "Piero Kitchen Cabinet",
    description: "( Exotic Teak–Frosty White Finish )",
    price: 23098,
    originalPrice: 39998,
    qty: 2
  },
  {
    id: 2,
    image: pic2,
    name: "Greyson Kitchen Cabinet",
    description: "( Exotic Teak Finish )",
    price: 26299,
    originalPrice: 33999,
    qty: 1
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [totals, setTotals] = useState({ total: 0, mrp: 0, discount: 0 });

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const handleQtyChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const mrp = cartItems.reduce((acc, item) => acc + item.originalPrice * item.qty, 0);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = mrp - total;
    setTotals({ total, mrp, discount });
  };
 
  return (
    <div className="container cart-page mt-4 mb-5">
      <h5 className="fw-bold mb-4">My Cart ({cartItems.length})</h5>
      <div className="row">
        {/* Left side */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex mb-4 pb-3">
              <Image
                src={item.image}
                alt={item.name}
                width={180}
                height={140}
                className="me-3 rounded"
              />
              <div className="flex-grow-1">
                <h6 className="fw-semibold">{item.name}</h6>
                <p className="text-muted small mb-2">{item.description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="me-2">Qty.</span>
                    <div className="qty-box">
                      <button onClick={() => handleQtyChange(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQtyChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="price-text">
                    ₹{item.price * item.qty}{" "}   
                    <del className="ms-2">₹{item.originalPrice * item.qty}</del>{" "}
                    <span className="text-success ms-2">
                      {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="me-3 text-muted action-btn">
                    <i className="bi bi-heart"></i> Save For Later
                  </span>
                  <span
                    className="text-danger action-btn"
                    onClick={() => handleRemove(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="col-lg-4">
          <div className="price-summary shadow-sm p-4 rounded-3">
            <h6 className="fw-bold mb-3">Price Detail <span className="text-muted">({cartItems.length} Items)</span></h6>
            <div className="d-flex justify-content-between mb-2">
              <span>MRP</span>
              <span>₹{totals.mrp}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Discount</span>
              <span className="text-success">- ₹{totals.discount}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Coupon (SUMMER25)</span>
              <span className="text-success">- ₹1,000</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-6">
              <span>Total Payable</span>
              <span>₹{totals.total - 1000}</span>
            </div>
            <small className="text-muted">Inclusive of all taxes</small>
            <p className="text-success small mt-3">Congratulations! You’ve Just Saved ₹{totals.discount + 1000} On Your Order.</p>
            <p className="small text-muted">EMI Starting ₹2,419/Month</p>
            <button className="btn btn-block place-order-btn mt-2">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
