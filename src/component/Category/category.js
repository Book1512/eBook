import React, { useState } from 'react';
import './category.css';
// import Nav from 'react-bootstrap/Nav';

// import Book from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-bootstrap/Modal';

// book json

import Adventure from './cdetail/adventure';
import Scifi from './cdetail/sci-fi';
import Horror from './cdetail/horror';
import Mystery from './cdetail/mystery';
import Cooking from './cdetail/cooking';
import Health from './cdetail/health';
// import Comic from './cdetail/comic';
import Technology from './cdetail/technology';
import Business from './cdetail/business';
import Biography from './cdetail/biography';

export default function Category() {

    // variables for image Data

    var t1 = "Adventure";
    var img1 = "https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    var c1 = Adventure;

    var t2 = "Sci-Fi";
    var img2 = "https://images.unsplash.com/photo-1560390816-3400050aab0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    var c2 = Scifi;

    var t3 = "Horror";
    var img3 = "https://images.unsplash.com/photo-1635488129873-ddacde2c1927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
    var c3 = Horror;

    var t4 = "Mystery";
    var img4 = "https://images.unsplash.com/photo-1628178636692-7a4a8851a7bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    var c4 = Mystery;

    var t5 = "Cooking";
    var img5 = "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
    var c5 = Cooking;

    var t6 = "Health";
    var img6 = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
    var c6 = Health;

    var t7 = "Comic";
    var img7 = "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    var c7 = Adventure;

    var t8 = "Technology";
    var img8 = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    var c8 = Technology;

    var t9 = "Business";
    var img9 = "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    var c9 = Business;

    var t10 = "Biography";
    var img10 = "https://images.unsplash.com/photo-1595072697075-bebc646eac35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80"
    var c10 = Biography;


    // Model Variables

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);

    const t1Show1 = () => setShow1(true)
    const t1Close = () => setShow1(false)

    const t2Show2 = () => setShow2(true)
    const t2Close = () => setShow2(false)

    const t3Show3 = () => setShow3(true)
    const t3Close = () => setShow3(false)

    const t4Show4 = () => setShow4(true)
    const t4Close = () => setShow4(false)

    const t5Show5 = () => setShow5(true)
    const t5Close = () => setShow5(false)

    const t6Show6 = () => setShow6(true)
    const t6Close = () => setShow6(false)

    const t7Show7 = () => setShow7(true)
    const t7Close = () => setShow7(false)

    const t8Show8 = () => setShow8(true)
    const t8Close = () => setShow8(false)

    const t9Show9 = () => setShow9(true)
    const t9Close = () => setShow9(false)

    const t10Show10 = () => setShow10(true)
    const t10Close = () => setShow10(false)

    const initialShowState = Object.fromEntries(
        c1.map((item) => [item.id, false])
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
        // autoplay: true,
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

                        {/* Adventure Box */}
                        <div className='box'>
                            <div>
                                <img src={img1} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t1Show1}>
                                        <h3>
                                            {t1}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show1}
                                onHide={t1Close}
                                size="lg"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t1}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c1.map((item) =>
                                                <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Sci-Fi Box */}
                        <div className='box'>
                            <div>
                                <img src={img2} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t2Show2}>
                                        <h3>
                                            {t2}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show2}
                                onHide={t2Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t2}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c2.map((item) =>
                                                <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Horror Box */}
                        <div className='box'>
                            <div>
                                <img src={img3} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t3Show3}>
                                        <h3>
                                            {t3}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show3}
                                onHide={t3Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t3}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c3.map((item) =>
                                                <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Mystrey Box */}
                        <div className='box'>
                            <div>
                                <img src={img4} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t4Show4}>
                                        <h3>
                                            {t4}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show4}
                                onHide={t4Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t4}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c4.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Cooking Box */}
                        <div className='box'>
                            <div>
                                <img src={img5} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t5Show5}>
                                        <h3>
                                            {t5}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show5}
                                onHide={t5Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t5}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c5.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Health Box */}
                        <div className='box'>
                            <div>
                                <img src={img6} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t6Show6}>
                                        <h3>
                                            {t6}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show6}
                                onHide={t6Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t6}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c6.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        id="model"
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Comic Box */}
                        <div className='box'>
                            <div>
                                <img src={img7} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t7Show7}>
                                        <h3>
                                            {t7}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show7}
                                onHide={t7Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t7}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c7.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Tech Box */}
                        <div className='box'>
                            <div>
                                <img src={img8} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t8Show8}>
                                        <h3>
                                            {t8}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show8}
                                onHide={t8Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t8}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c8.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Business Box */}
                        <div className='box'>
                            <div>
                                <img src={img9} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t9Show9}>
                                        <h3>
                                            {t9}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show9}
                                onHide={t9Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t9}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c9.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {/* Biography Box */}
                        <div className='box'>
                            <div>
                                <img src={img10} alt="" />
                                <div className='con-box'>
                                    <div className='text' variant="link" onClick={t10Show10}>
                                        <h3>
                                            {t10}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                show={show10}
                                onHide={t10Close}
                                size="xl"
                                centered

                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{t10}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="mbody">

                                        {
                                            c10.map((item) =>
                                            <div>
                                                    <div align="center" key={item.id} id="mbox">
                                                        <div className="swipe" target="_blank" rel="noopener noreferrer" variant="link" onClick={(e) => toggleShow(item.id)}>
                                                            <img src={item.image} alt="" width={'100%'} style={{ height: '18rem' }} />
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show[item.id]}
                                                        onHide={() => toggleShow(item.id)}
                                                        size="lg"
                                                        autoFocus={true}
                                                        // style={{overflow:'hidden'}}
                                                        id="model"
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
                                                                    {/* <button className='btn btn-outline-primary'> Read Book </button> */}
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
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                    </Slider>
                    {/* <div className='more-btn' align="center">
                        <button className='btn btn-outline-primary btn-lg animate__animated animate__bounce animate__repeat-2'>
                            <Nav.Link href="/cdetail/Cadventure">
                                See More
                            </Nav.Link>
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
