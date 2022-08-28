import React from 'react';
import './tpb.css';

// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Newreleasebook from './nbooks';
import Bestsellerbooks from './bbestseller';
import Editorbooks from './ebooks';

function TPB() {
  return (
    <section className='book' id='book_corner'>
      <div className='row'>
        <div className='content'>
          <h1 className='heading'><span>Book</span> Corner</h1>
        </div>
        <hr />
        <div className='book_content'>

          <Tab.Container className="Magan" defaultActiveKey="first">
            <Row className='row'>

              <Nav className='nav d-flex justify-content-center'>
                <Nav.Link eventKey="first">
                  <button className='btn'>Bestseller</button>
                </Nav.Link>
                <Nav.Link eventKey="second">
                  <button className='btn'>New Releases</button>
                </Nav.Link>
                <Nav.Link eventKey="third">
                  <button className='btn'>Editor's corner</button>
                </Nav.Link>
              </Nav>
            </Row>

            <Row>
              <Tab.Content className='mt-4'>
                <Tab.Pane eventKey="first">
                  <Bestsellerbooks />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Newreleasebook />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Editorbooks />
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
          <img src='./images/shelf2.png' alt='' className='stand' id="stand" />

        </div>
      </div>
    </section>
  );
}

export default TPB;