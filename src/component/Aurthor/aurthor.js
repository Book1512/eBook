import React, { useState } from 'react';
import './aurthor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import Author from '../data/author';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-bootstrap/Modal';


export default function Aurthor() {

    const initialShowState = Object.fromEntries(
        Author.map((citem) => [citem.id, false])
    );
    const [show, setShow] = useState(initialShowState);

    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });
    const settings = {

        infinite: true,
        slidesToShow: 3,
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
        <section className='author' id="author"
            style={{
                overflow: 'hidden'
            }}

        >
            <div className='row'
                style={{

                    backgroundImage: `url(./images/bg-3.jpg)`,
                    padding: '50px 0'
                }}>
                <div className='content'>
                    <h1 className='heading'>Author</h1>
                </div>
                <hr />

                <div className='card_section'>


                    <Slider {...settings}>


                        {
                            Author.map((citem) =>
                                <div className='cards' key={citem.id}>
                                    <Card className="card m-auto d-block">
                                        <Card.Img className="card-img" src={citem.image} />


                                        <Card.Body className='card-body'>
                                            <Card.Title className='card-title text-center' variant="link" onClick={(e) => toggleShow(citem.id)}>
                                                {citem.name}
                                            </Card.Title>
                                            <hr className='w-100' />
                                            <Card.Text className='card-text'>
                                                {citem.info}
                                            </Card.Text>
                                            {/* <Button variant="link" onClick={(e) => toggleShow(citem.id)}>Go somewhere</Button> */}
                                        </Card.Body>


                                    </Card>

                                    <Modal
                                        show={show[citem.id]}
                                        onHide={() => toggleShow(citem.id)}
                                        size="lg"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>{citem.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <div className='d-flex col-12'>
                                                <div className='col-6'>
                                                    <img src={citem.image} alt="" style={{width:'100%'}} />
                                                </div>
                                                <div className='des px-3 col-6'>
                                                    <p>{citem.sinfo}</p>
                                                </div>
                                            </div>

                                        </Modal.Body>
                                    </Modal>
                                </div>
                            )
                        }




                    </Slider>


                </div>



            </div>

        </section>
    )
}
