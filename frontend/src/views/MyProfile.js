import React from 'react';
import { Button } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Alert } from 'reactstrap';
import store from '../store';

const API_URL = process.env.REACT_APP_API_URL;

export default function MyProfile() {
    const [visible, setVisible] = useState(true);
    const [messageAlert, setMessageAlert] = useState('');
    const [colorAlert, setColorAlert] = useState('danger');

    const onDismiss = () => {
        setVisible(false);
        setMessageAlert("");
    }

    // let history = useHistory();

    const style = {
        p: {
            padding: '10px',
        },
        button: {
            width: '100px',
        },
        card: {
            marginTop: '10px',
        },
        alert: {
            marginTop: '30px',
        }
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

                    // Save userID in redux store
                    store.dispatch({ type: 'CREATE_USER', user: userName });
                    console.log({ type: 'CREATE_USER', user: userName });
                    //document.getElementById("buttonSave").style.display = 'none';
                    document.getElementById("buttonSave").disabled = true;
                    document.getElementById("userName").readOnly = true;

                    // setTimeout(function () {
                    //     history.push('/');
                    // }, 2000);
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
                            <Col xs="8">
                                <InputGroup>
                                    <Input id="userName" placeholder="Chat ID" />
                                </InputGroup>
                            </Col>
                            <Col xs="2">
                                <Button id="buttonSave" onClick={handleSummit} color="secondary" style={style.button}>SAVE</Button>
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