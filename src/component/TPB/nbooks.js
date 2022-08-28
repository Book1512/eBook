import React from 'react'
import Slider from 'react-slick'
import './fbook.css'
import Newrelease from './cdata/newbooks'
export default function Newreleasebook() {

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
                    Newrelease.map((item) =>
                        <div align="center" key={item.id}>
                            <a href={item.link} className="swipe" target="_blank" rel="noopener noreferrer">
                                <img src={item.image} alt="" />
                            </a>
                        </div>
                    )
                }
            </Slider>
        {/* </div> */}
            <img src='./images/shelf2.png' alt='' className='stand' />
        </section>
    )
}
