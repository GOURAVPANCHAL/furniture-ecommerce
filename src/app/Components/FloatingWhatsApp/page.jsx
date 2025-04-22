import Link from "next/link"
import React from "react"
import './floating.css'


export default function FloatingWhatsApp(){
    return(
        <>
        <div className="floating-whatsapp-box">
            <button className="btn btn-outline-light w-100 fw-bold mb-2">Visit Store</button>
              <Link
              href="https://wa.me/917827433992"
              target="_blank"
              rel="norefferrer"
              className="btn btn-success w-100 fw-bold "
              
              
              >
               WhatsApp For Offers
              
              </Link> 

        </div>


        </>
    )
}
















// // components/FloatingWhatsApp.js

// import React from "react";
// import Link from "next/link";
// import "./floating.css"; // Make sure this path is correct

// export default function FloatingWhatsApp() {
//   return (
//     <div className="floating-whatsapp-box">
//       <button className="btn btn-outline-success w-100 fw-bold mb-2">
//         Visit Store
//       </button>
//       <Link
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn btn-success w-100 fw-bold"
//       >
//         WhatsApp for Offers
//       </Link>
//     </div>
//   );
// }
