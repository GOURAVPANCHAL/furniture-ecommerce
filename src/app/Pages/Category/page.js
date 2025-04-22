import React from 'react'
import image1 from "@/app/Components/assets/icon1.jpg"
import image2 from "@/app/Components/assets/icon2.webp"
import image3 from "@/app/Components/assets/icon3.webp"
import image4 from "@/app/Components/assets/icon4.jpg"
import image5 from "@/app/Components/assets/icon6.webp"
import image6 from "@/app/Components/assets/icon7.webp"
import image7 from "@/app/Components/assets/icon8.jpg"
import Image from 'next/image'
import Link from 'next/link'
import './category.css'
const page = () => {
    const categories = [
        {
            productImage: image1,
            productName: "Sofa Set",
        },
        {
            productImage: image2,
            productName: "Sofa Set",
        },
        {
            productImage: image3,
            productName: "Sofa Set",
        },
        {
            productImage: image4,
            productName: "Sofa Set",
        },
        {
            productImage: image5,
            productName: "Sofa Set",
        },
        {
            productImage: image6,
            productName: "Sofa Set",
        },
        {
            productImage: image7,
            productName: "Sofa Set",
        },
    ]
    return (
        <>
            <div className='category-page'>
                <div className='container'>
                    <div className='heading-section'>
                        <h1 className='text-center'>Kitchen Furniture</h1>
                        <hr />
                        <p className='text-center'>Explore our wide range of kitchen furniture, designed to enhance your cooking and dining experience. From stylish cabinets to comfortable dining sets, we have everything you need to create the perfect kitchen.</p>
                    </div>
                    <div className='row'>
                        {categories.map((category, index) => (
                            <div className='col-md-2 col-sm-6 col-xs-12' key={index}>
                                <div className='category-card'>
                                    <Link href='/'>
                                        <Image src={category.productImage} alt={category.productName} className='img-fluid' />
                                        <h5 className='category-product-nam'>{category.productName}</h5>
                                    </Link>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page