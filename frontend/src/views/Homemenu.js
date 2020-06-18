import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Label, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const style = {
    p: {
        padding: '10px',
    },
    ref: {
        backgroundColor: 'white',
        padding: '16px',
        color: 'black',
        fontSize: '34px',
        marginTop: '10px',
        border: '10px solid black',
    }
};

export default function HomeMenu() {
    return (
        <div style={style.p}>
        <Card>
            <CardBody>
                <h1 align="center" >Home</h1>
                <ListGroup align="center">
                    <ListGroupItem tag="a" href="./myprofile" action>My profile</ListGroupItem>
                    <ListGroupItem tag="a" href="./mymessages" action>My message</ListGroupItem>
                    <ListGroupItem tag="a" href="./chattingrooms" action>Chatting Rooms</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
        </div>
    );
};
