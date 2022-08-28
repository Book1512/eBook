import React from "react";
import { Modal, Card, Button, Row, Col, Image } from "react-bootstrap";
import Author from "./data/author";

const Test = () => {
    const initialShowState = Object.fromEntries(
        Author.map((citem) => [citem.id, false])
    );
    const [show, setShow] = React.useState(initialShowState);
    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });

    return (
        <div className="work-container">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    Author.map((citem) => {
                        return (
                            <div key={citem.id}>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={citem.image} />
                                        <Card.Body>
                                            <Card.Title>{citem.name}</Card.Title>
                                            <Card.Text>with {citem.info}</Card.Text>
                                            <Button
                                                variant="link"
                                                onClick={() => toggleShow(citem.id)}
                                            >
                                                Magan Is here
                                            </Button>
                                        </Card.Body>
                                        <Card.Footer>{citem.tags}</Card.Footer>
                                    </Card>
                                </Col>

                                <Modal
                                    show={show[citem.id]}
                                    onHide={() => toggleShow(citem.id)}
                                    dialogClassName="modal-95w"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>{citem.id}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Image src={citem.projectImage}></Image>
                                        <p>{citem.modalText}</p>
                                        <Image src={citem.modalImage}></Image>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        );
                    })}
            </Row>
        </div>
    );
};

export default Test;