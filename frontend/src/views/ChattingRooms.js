import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Card, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import store from '../store';
import { useState, useEffect } from 'react';

export default function MyMessages() {
    let history = useHistory();
    const style = {
        p: {
            padding: '10px',
        },
        button: {
            width: '100px',
        },
    };

    const [currUser, setCurrUser] = useState();

    useEffect(() => {
        console.log("useEffect did");
        console.log(store.getState().user);
        setCurrUser(store.getState().user);

        store.subscribe(function () {
            console.log("Need to solve")
            setCurrUser(store.getState().user)
        });
    }, []);

    const handleButton1 = () => {
        history.push("/chatting/?roomNo=1001&user=" + currUser);
    };

    const handleButton2 = () => {
        history.push("/chatting/?roomNo=1002&user=" + currUser);
    };

    const handleButton3 = () => {
        history.push("/chatting/?roomNo=1003&user=" + currUser);
    };

    return (
        <div style={style.p}>
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col>
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
                                                <Button color="secondary" style={style.button} onClick={handleButton1}>Join</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Row>
                                            <Col xs="8">
                                                <h6 >Javascript discussion </h6>
                                            </Col>
                                            <Col xs="2">
                                                <Button color="secondary" style={style.button} onClick={handleButton2}>Join</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem><ListGroupItem>
                                        <Row>
                                            <Col xs="8">
                                                <h6 >NodeJs discussion </h6>
                                            </Col>
                                            <Col xs="2">
                                                <Button color="secondary" style={style.button} onClick={handleButton3}>Join</Button>
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
