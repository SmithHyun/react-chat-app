import React from 'react';
import { ListGroup } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import { useState, useEffect } from 'react';
import store from '../store';
import MyProfile from './MyProfile';
import ChattingRooms from './ChattingRooms';


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
    const [currUser, setCurrUser] = useState();
    useEffect(() => {
        console.log("useEffect did");
        console.log(store.getState().user);
        setCurrUser(store.getState().user);

        store.subscribe(function(){
            console.log("I think, this is a problem");
            setCurrUser(store.getState().user)
        });
    }, []);

    return (
        <div style={style.p}>
        <Card>
            <CardBody>
                <h1 align="center" >Home</h1>
                <ListGroup align="center">
                    My Chat ID : [{currUser}]
                    <MyProfile></MyProfile>
                    {/* <ListGroupItem tag="a" href="./mymessages" action>My message</ListGroupItem> */}
                    {/* <MyMessages></MyMessages> */}
                    <ChattingRooms></ChattingRooms>
                </ListGroup>
            </CardBody>
        </Card>
        </div>
    );
};
