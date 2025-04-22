"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDelete } from "react-icons/md";
import Image from "next/image";
import "./cartSidebar.css";

const CartSidebar = ({ isOpen, onClose, cartItems = [], onRemoveItem }) => {
  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="cart-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="cart-header">
              <h4>Your Cart</h4>
              <MdClose className="close-icon" onClick={onClose} />
            </div>

            <div className="cart-body">
              {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div className="cart-item d-flex gap-3 align-items-start" key={index}>
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="rounded"
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="mb-1">
                        ₹{item.price} × {item.quantity}
                      </p>
                      <strong>₹{item.price * item.quantity}</strong>
                    </div>
                    <MdDelete
                      className="text-danger fs-5 cursor-pointer"
                      onClick={() => onRemoveItem(item.id)}
                    />
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong>₹{total}</strong>
                </div>
                <button className="btn btn-dark w-100">Go to Checkout</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
