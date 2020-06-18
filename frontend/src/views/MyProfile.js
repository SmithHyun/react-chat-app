import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Label, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default function MyProfile() {
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
                                    <Input placeholder="username" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row align="right">
                            <Col xs="12">
                                <Button color="secondary" style={style.button}>SAVE</Button>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
