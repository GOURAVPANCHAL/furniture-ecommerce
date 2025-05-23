import React from 'react'

const page = () => {
  return (
    <>
     {/* product filteration  */}
     <section className='product-filter py-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-8'>
                            <div className='d-flex gap-2 flex-wrap align-items-center'>
                                <h2 className='fw-bold text-white me-4'>Filter By</h2>
                                {/* Price Dropdown */}
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Price
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Under $5000</a></li>
                                        <li><a className="dropdown-item" href="#">$5000 - $10000</a></li>
                                        <li><a className="dropdown-item" href="#">Above $10000</a></li>
                                    </ul>
                                </div>
                                {/* Category Dropdown */}
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Category
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Sofas</a></li>
                                        <li><a className="dropdown-item" href="#">Furniture</a></li>
                                        <li><a className="dropdown-item" href="#">Tables </a></li>
                                    </ul>
                                </div>
                                {/* Material Dropdown */}
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Material
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cotton</a></li>
                                        <li><a className="dropdown-item" href="#">Leather</a></li>
                                        <li><a className="dropdown-item" href="#">Synthetic</a></li>
                                    </ul>
                                </div>
                                {/* Size Dropdown */}
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Size
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">S</a></li>
                                        <li><a className="dropdown-item" href="#">M</a></li>
                                        <li><a className="dropdown-item" href="#">L</a></li>
                                        <li><a className="dropdown-item" href="#">XL</a></li>
                                    </ul>
                                </div>
                                {/* Discount Dropdown */}
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Discount
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">10% or more</a></li>
                                        <li><a className="dropdown-item" href="#">30% or more</a></li>
                                        <li><a className="dropdown-item" href="#">50% or more</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-end align-items-center gap-2'>
                            <strong className="text-white">Sort By</strong>
                            <select className='form-select form-select-sm w-auto'>
                                <option value="relevance">Relevance</option>
                                <option value="price_low_high">Price: Low to High</option>
                                <option value="price_high_low">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default page