import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Label, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';

export default function MyMessages() {
    const style = {
        p: {
            padding: '10px',
        },
    };
    return (
        <div style={style.p}>
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="2">
                                <Button color="secondary" size="sm" style={style.p} active>Prev</Button>
                            </Col>
                            <Col xs="8">
                                <h1 align="center">Chatting Rooms</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12">
                            <ListGroup>
                                <ListGroupItem>
                                <Row>
                                    <Col xs="8">
                                        <h6 >React discussion </h6>
                                    </Col>
                                    <Col xs="2">
                                        <Button color="secondary">Join</Button>
                                    </Col>
                                </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                <Row>
                                    <Col xs="8">
                                        <h6 >Javascript discussion </h6>
                                    </Col>
                                    <Col xs="2">
                                        <Button color="secondary">Join</Button>
                                    </Col>
                                </Row>
                                </ListGroupItem><ListGroupItem>
                                <Row>
                                    <Col xs="8">
                                        <h6 >NodeJs discussion </h6>
                                    </Col>
                                    <Col xs="2">
                                        <Button color="secondary">Join</Button>
                                    </Col>
                                </Row>
                                </ListGroupItem>
                            </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
