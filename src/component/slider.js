import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

        autoplaySpeed: 2500,

    };
    return (
        <div style={{ overflow: 'hidden', margin:"20px 10px" ,boxShadow:"5px 15px 10px #888888"}}>
            <Slider {...settings}>
                
                                 {/* slider images start here */}
                <div>
                    <img
                        style={{ width: 1583, height: 550, objectFit: "cover"}}
                        src='./images/6.jpg' alt='kuch nai hai' />

                </div>
                <div>
                    <img
                        style={{ width: 1583, height: 550, objectFit: "cover"}}
                        src='./images/2.jpg' alt='kuch nai hai' />

                </div>
                <div>
                    <img
                        style={{ width: 1583, height: 550, objectFit: "cover"}}
                        src='./images/4.jpg' alt='kuch nai hai' />

                </div>
                <div>
                    <img
                        style={{ width: 1583, height: 550, objectFit: "cover"}}
                        src='./images/5.jpg' alt='kuch nai hai' />

                </div>
                <div>
                    <img
                        style={{ width: 1583, height: 550, objectFit: "cover"}}
                        src='./images/img.jpeg' alt='kuch nai hai' />

                </div>
            </Slider>
        </div>
    );
}
export default Sliders;