import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
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
                                <h1 align="center">My messages</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                            <ListGroup align="center">
                                <ListGroupItem tag="a" href="./about" action>React discussion <Badge color="danger">4</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="./about" action>Javascript discussion <Badge color="danger">1</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="./about" action>NodeJs discussion <Badge color="danger"></Badge></ListGroupItem>
                            </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
