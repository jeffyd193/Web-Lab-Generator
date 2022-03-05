import React from 'react';

import { Card, Col, Container, Button, Row } from 'react-bootstrap';
import './quickLinks.css';
import CardOne from './images/card-1.jpg';
import CardTwo from './images/card-2.jpg';
import CardThree from './images/card-3.jpg';

const QuickLinks = () => {
    return (

        <Container className="quick-links-container">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={CardOne} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={CardTwo} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={CardThree} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default QuickLinks;