import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './shelf.css';

export default function Shelf() {

    const settings = {

        infinite: true,
        speed: 500,
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
        <section className="home" id="home" style={{
            overflow: 'hidden',
            backgroundImage: `url(./images/banner.jpg)`
            // background: url(../ images / banner.jpg) no- repeat,
            // background-size: 'cover',
            // background-position: 'center'
        }}
        >

            <div className="row">
                <div className='content' style={{textAlign:'center'}}>
                    <h1> Welcome to <br/><span>Book Archive</span></h1>

                </div>

                <div className="books-slider">

                    <Slider {...settings}>

                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/dad.png" alt="" /></a>
                        </div>
                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/dad2.png" alt="" /></a>
                        </div>
                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/book-3.png" alt="" /></a>
                        </div>
                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/book-4.png" alt="" /></a>
                        </div>
                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/book-5.png" alt="" /></a>
                        </div>
                        <div align="center">
                            <a href="#" className="swipe"><img src="./images/book/book-6.png" alt="" /></a>
                        </div>
                    </Slider>

                    <img src="./images/book/stand.png" className="stand" alt="" />
                </div>

            </div>

        </section >
    )
}
