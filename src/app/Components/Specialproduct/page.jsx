import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <section>
        <div className='SpecialProductSec'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Image src="/icon1.png" alt="Special Product" width={500} height={300} />
                    </div>
                </div>
            </div>

        </div>
      </section>


    </>
  )
}

export default page
