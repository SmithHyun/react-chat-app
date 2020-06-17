import React from 'react';
import {
    ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
    Button, CardTitle, CardSubtitle, Label, Jumbotron
} from 'reactstrap';

export default function HomeMenu() {
    const style = {
        backgroundColor: 'white',
        padding: '16px',
        color: 'black',
        fontSize: '34px'
    };
    return (
        <Card>
            <CardBody>
                <h1 align="center" style={style}>Home</h1>
                <ListGroup align="center">
                    <ListGroupItem tag="a" href="./about" action>My profile</ListGroupItem>
                    <ListGroupItem tag="a" href="./about" action>My message</ListGroupItem>
                    <ListGroupItem tag="a" href="./about" action>Chatting Rooms</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};
