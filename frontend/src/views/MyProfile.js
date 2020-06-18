import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Label, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { Alert } from 'reactstrap';

const API_URL = process.env.REACT_APP_API_URL;

export default function MyProfile() {
    const [visible, setVisible] = useState(true);
    const [messageAlert, setMessageAlert] = useState('');
    const [colorAlert, setColorAlert] = useState('danger');

    const onDismiss = () => {
        setVisible(false);
        setMessageAlert("");
    }

    let history = useHistory();

    const style = {
        p: {
            padding: '10px',
        },
        button: {
            marginTop: '10px',
            width: '120px',
        },
        card: {
            marginTop: '10px',
        },
        alert: {
            marginTop: '30px',
        }
    };

    const goBack = () => {
        history.goBack();
    };

    const handleSummit = (event) => {
        event.preventDefault();
        setVisible(true); //init

        console.log(document.getElementById("userName").value);
        let userName = document.getElementById("userName").value;

        if (userName === "") {
            setMessageAlert("User name is required!");
            return;
        }

        const url = `${API_URL}/users`;
        axios({
            method: 'post',
            url: url,
            data: qs.stringify({
                userId: userName,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then(res => {
                let response = res.data;
                if (response.result === true) {
                    setColorAlert("info");
                    setMessageAlert("User is registered.");
                    setTimeout(function () {
                        history.push('/');
                    }, 2000);
                } else {
                    setMessageAlert("User registration failed.");
                }
            })
    }

    return (
        <div style={style.p}>
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="2" align="left" >
                                <Button onClick={goBack} color="secondary" size="sm" style={style.p} >Prev</Button>
                            </Col>
                            <Col xs="8">
                                <h1 align="center">My profile</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <h6 align="left">Chat ID</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <InputGroup>
                                    <Input id="userName" placeholder="username" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row align="right">
                            <Col xs="12">
                                <Button onClick={handleSummit} color="secondary" style={style.button}>SAVE</Button>
                            </Col>
                        </Row>
                        {(messageAlert === "") ? "" :
                            <Row style={style.alert}>
                                <Col xs="12">
                                    <Alert color={colorAlert} isOpen={visible} toggle={onDismiss}>
                                        {messageAlert}
                                    </Alert>
                                </Col>
                            </Row>
                        }
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};