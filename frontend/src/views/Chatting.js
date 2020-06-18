import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Label, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FormGroup, FormText } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function MyProfile() {
    const style = {
        p: {
            padding: '10px',
        },
        button: {
            marginTop: '10px',
            width: '120px',
        },
        chatBox: {
            marginTop: '10px',
            marginBottom: '30px',
            border: '4px solid pink',
        }

    };
    return (
        <div style={style.p}>
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="2" align="left" >
                                <Button color="secondary" size="sm" style={style.p} active>Prev</Button>
                            </Col>
                            <Col xs="8">
                                <h1 align="center">Chatting</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <h6 align="left">Name of Room</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <InputGroup>
                                    <Input placeholder="username" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>


            <Card >
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="12">
                                <div style={style.chatBox} className="rounded">
                                    <div className="p-0 my-2 rounded">
                                        <Toast>
                                            <ToastHeader>
                                                Smith
                                            </ToastHeader>
                                            <ToastBody>
                                                Hello
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                    <div align="right" className="p-0 my-2 rounded">
                                        <Toast>
                                            <ToastHeader>
                                                jshyun
                                            </ToastHeader>
                                            <ToastBody>
                                                Oh... Good morning!
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </div>
                            </Col>
                        </Row>



                        <Row>
                            <Col xs="12">
                                <h6 align="left">Message</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <InputGroup>
                                    <Input placeholder="hello" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row align="right">
                            <Col xs="12">
                                <Button color="secondary" style={style.button}>SEND</Button>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
