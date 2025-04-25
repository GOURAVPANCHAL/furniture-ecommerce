import Head from "next/head";
import Image from "next/image";
import pic1 from '@/app/Components/assets/icon1.jpg'
import pic2 from '@/app/Components/assets/icon2.webp'
import pic3 from '@/app/Components/assets/icon3.webp'
import "./order.css";

const TrackOrder = () => {
    const order = {
        id: "#123456",
        status: "Pending",
        paymentMode: "Online",
        paymentStatus: "Paid",
        total: "₹2,498",
        date: "25 April 2025",
        products: [
            {
                name: "Luxury Wooden Chair",
                price: 899,
                qty: 2,
                image: pic1,
            },
            {
                name: "Modern Table Lamp",
                price: 700,
                qty: 1,
                image: pic2,
            },
            {
                name: "Modern Bed Lamp",
                price: 400,
                qty: 1,
                image: pic3,
            },
        ],
    };

    return (
        <>
            <div className="topSec">

                <h3>Our Profile</h3>
                <div className="mainSec">
                    <p className="p-0 m-0"> <b> Name  </b> : Mukesh</p>
                    <p className="p-0 m-0"> <b> Email </b> : mukeshmahar00@gmail.com</p>
                </div>
            </div>






            <Head>
                <title>Track Order</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="container my-5">
                <h2 className="mb-4 text-center fw-bold">Order Summary</h2>
                <div className="row">
                    {/* Left: Order Details */}
                    <div className="col-md-4 mb-4">
                        <div className="order-details-card">
                            <h5>Order Details</h5>
                            <div className="row fw-semibold border-bottom pb-2">
                                <div className="col-4">Order ID</div>
                                <div className="col-4">Order Status</div>
                                <div className="col-4">Payment Mode</div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-4">{order.id}</div>
                                <div className="col-4">{order.status}</div>
                                <div className="col-4">{order.paymentMode}</div>
                            </div>

                            <div className="row fw-semibold border-bottom pb-2">
                                <div className="col-4">Payment Status</div>
                                <div className="col-4">Total</div>
                                <div className="col-4">Date</div>
                            </div>
                            <div className="row">
                                <div className="col-4">{order.paymentStatus}</div>
                                <div className="col-4">{order.total}</div>
                                <div className="col-4">{order.date}</div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Product Table */}
                    <div className="col-md-8">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle m-0">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th> 
                                        <th scope="col">Qty</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded"
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>₹{item.price}</td>
                                            <td>{item.qty}</td>
                                            <td>₹{item.price * item.qty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TrackOrder;












