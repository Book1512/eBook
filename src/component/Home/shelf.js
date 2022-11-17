import React, { useState } from 'react';
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './shelf.css';
import 'animate.css';
// import Bestseller from '../TPB/cdata/Bestseller';
import Adventure from '../Category/cdetail/adventure';
export default function Shelf() {

    // Book Data Variable

    var s1 = Adventure;

    // For Slider
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
    const initialShowState = Object.fromEntries(
        s1.map((item) => [item.id, false])
    );
    const [show, setShow] = useState(initialShowState);

    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });

    return (
        <section className="home" id="home" style={{
            overflow: 'hidden',
            backgroundImage: `url(./images/banner.jpg)`

        }}
        >

            <div className="row">
                <div className='content' style={{ textAlign: 'center', fontSize: '5rem' }}>
                    <p> Welcome to <br/>Book Archive</p>
                    <hr />
                </div>

                <div className="books-slider">
                    {/* Book.map((item) => */}

                    <Slider {...settings}>
                        {
                            s1.map((item) =>
                                <div align="center" key={item.id}>
                                    <p className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                        <img src={item.image} alt="" />
                                    </p>
                                    <Modal
                                        show={show[item.id]}
                                        onHide={() => toggleShow(item.id)}
                                        size="lg"
                                        autoFocus="true"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>{item.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <div className='d-flex col-12'>
                                                <div className='col-6' id="mimg">
                                                    <p>
                                                        <div className='rb'>
                                                            <button className='btn btn-outline-secondary' >
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                Read Book
                                                            </a>
                                                            </button>
                                                        </div>
                                                        <img src={item.image} alt="" style={{ width: '100%' }} />
                                                    </p>
                                                </div>
                                                <div className='des px-3 col-6 flex-wrap overflow-auto mt-4' style={{ height: '30rem' }}>
                                                    <p className=''>{item.des}</p>
                                                </div>
                                            </div>

                                        </Modal.Body>
                                    </Modal>
                                </div>
                            )
                        }


                    </Slider>


                    <img src="./images/stand.png" className="stand" alt="" />
                </div>

            </div>

        </section>
    )
}
