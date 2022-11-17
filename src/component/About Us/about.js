import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Devloper from '../data/devloper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

function About() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

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
    <section className='about_us' id='our_team'

      style={{

        overflow: 'hidden',
          backgroundImage: `url(./images/dev.jpg)`,
        padding: '50px 0'

      }}>
      <div className='row'
        style={{

          // backgroundImage:`url(./images/bg-3.jpg)`,

        }}>
        <div className='content'>
          <h1 className='heading'> <span>Our</span> Team</h1>
        </div>
        <hr />
        <div className='dev_card_section'>
          <Slider {...settings}>

            {
              Devloper.map((citem) =>
                <div className='cards' key={citem.id}>
                  <Card className="card m-auto">
                    <Card.Img className="card-img" src={citem.image} />
                    <Card.Body className='card-body m-auto'>
                      <Card.Title className='card-title'>
                        {citem.name}
                      </Card.Title>
                      <hr className='w-100' />
                      <Card.Subtitle className="mb-2 text-muted" style={{color:'white'}}>{citem.designation}</Card.Subtitle>
                      <Card.Text className='card-text'>
                        {citem.detail}
                      </Card.Text>
                      <hr className='w-100' />
                      {/* <Button> <IoLogoInstagram /></Button> */}
                      <Card.Text className='d-flex justify-content-between px-4'>
                        <i className='btn_insta'> <a href={citem.insta} target="_blank" rel="noopener noreferrer"> <IoLogoInstagram /> </a> </i>
                        <i className='btn_insta'> <a href={citem.face} target="_blank" rel="noopener noreferrer"> <IoLogoFacebook /> </a> </i>
                        <i className='btn_insta'> <a href={`mailto${citem.gmail}`} target="_blank" rel="noopener noreferrer"> <FiMail /> </a> </i>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            }

          </Slider>

        </div>
      </div>
    </section>
  );
}

export default About;