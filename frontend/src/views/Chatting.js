import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';


export default function Chatting() {
    let history = useHistory();

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
            border: '4px solid #40E0D0',
            width: '300px'
        },
        chatWindow: {
            width: '500px',
            height: '300px'
        }

    };

    const goBack = () => {
        let socket = stateSocket;
        socket.close();
        history.goBack();
    };

    const [roomNo, setRoomNo] = useState('');
    const [chatName, setChatName] = useState('');
    const [msg, setMsg] = useState('');
    const [stateSocket, setStateSocket] = useState('');

    function sendHandler() {
        var message = { roomName: roomNo, type: 'chat', message: chatName + " : " + msg }
        stateSocket.json.send(message);
        console.log("sendHandler", "1 c -> s send chat:", message);
    }

    function getParameterByName(name) {
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    useEffect(() => {
        console.log("useEffect did");
        let socket = new io.connect('http://127.0.0.1:8070');

        setStateSocket(socket);

        let roomName = getParameterByName('roomNo');
        setRoomNo(roomName);
        console.log(roomName);

        let strChatName = getParameterByName('user');
        setChatName(strChatName);
        console.log('chatName', strChatName);

        var msg = { roomName: roomName, type: 'setUsername', user: strChatName };
        console.log("c -> s send user name / msg:", msg);
        socket.json.send(msg);


        socket.on('connect', function () {
            console.log("socket.on : Connected");
        });

        socket.on('message', function (message) {
            console.log("socket.on : message", message);
            if (message === null) {
                message = '';
            }
            let content = document.querySelector('#content');
            let br = document.createElement("br");
            content.append(message, br);

        });

        socket.on('disconnect', function () {
            console.log('socket.on : disconnected');
        });

    }, []);

    return (
        <div style={style.p}>
            <Fragment>
                <Card>
                    <CardBody>
                        <Container>
                            <Row>
                                <Col xs="2" align="left" >
                                    <Button onClick={goBack} color="secondary" size="sm" style={style.p} active>Prev</Button>
                                </Col>
                                <Col xs="8">
                                    <h1 align="center">Chatting</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <h4 align="center">Room: {roomNo}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <h4 align="center">My Id: {chatName}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>


                <Card >
                    <CardBody>
                        <Container>

                            <div id="content" style={style.chatWindow}> </div>
                            {/* <input type="text"
                                cols="40" 
                                rows="5" 
                                style={style.chatWindow} 
                                name="Text1" 
                                id="content" 
                                value="" /> */}

                            <Row>
                                <Col xs="12">
                                    <h6 align="left">Message</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <InputGroup>
                                        <Input placeholder="hello" id="chatTxt" value={msg} name="msg" onChange={(event) => setMsg(event.target.value)} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row align="right">
                                <Col xs="12">
                                    <Button color="secondary" style={style.button} onClick={sendHandler} >SEND</Button>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </Fragment>
        </div>

    );
};
