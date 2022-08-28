import React from 'react'
import Slider from 'react-slick'
import './fbook.css'
import Bestseller from './cdata/Bestseller'
export default function Bestsellerbooks() {

    const settings = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 468,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className='fbook'>
        {/* <div className='fcontent'> */}
            <Slider {...settings}>
                {
                    Bestseller.map((item) =>
                        <div align="center" key={item.id}>
                            <a href={item.link} target="_blank"  className="swipe">
                                <img src={item.image} alt="" />
                            </a>
                        </div>
                    )
                }
            </Slider>
        {/* </div> */}
            {/* <img src='./images/shelf2.png' alt='' className='stand' /> */}
        </section>
    )
}
