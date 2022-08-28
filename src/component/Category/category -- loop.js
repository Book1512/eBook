import React, { useState } from 'react';
import './category.css';
import Nav from 'react-bootstrap/Nav';

// import Book from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cdata from "../data/cdata"
import Modal from 'react-bootstrap/Modal';
import Horror from '../data/horror';

export default function Category() {
    const initialShowState = Object.fromEntries(
        Cdata.map((citem) => [citem.id, false])
    );
    const [show, setShow] = useState(initialShowState);

    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });
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
        <section className='category' id='category'>
            <div className='row'>
                <div className='content'>
                    <h1 className='heading'>Category</h1>
                </div>
                <hr />
                <div className='slided'>
                    <Slider {...settings}>

                        {
                            Cdata.map((citem) =>
                                <div className='box'>
                                    <div key={citem.id}>
                                        <img src={citem.cimg} alt="" />
                                        <div className='con-box'>
                                            <div className='text' variant="link" onClick={(e) => toggleShow(citem.id)}>
                                                <h3>
                                                    {citem.cname}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <Modal
                                        show={show[citem.id]}
                                        onHide={() => toggleShow(citem.id)}
                                        size="lg"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>{citem.cname}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            {
                                                Horror.map((item) =>
                                                    <div align="center" key={item.id}>
                                                        <a href={item.link} className="swipe" target="_blank" rel="noopener noreferrer">
                                                            <img src={item.image} alt="" />
                                                            {/* <img src={item.image} alt="" /> */}
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            )
                        }


                    </Slider>
                    <div className='more-btn' align="center">
                        <button className='btn btn-outline-primary btn-lg animate__animated animate__bounce animate__repeat-2'>
                            <Nav.Link href="/cdetail/Cadventure">
                                See More
                            </Nav.Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
