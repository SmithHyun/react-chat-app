import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './views/About';
import HomeMenu from './views/Homemenu';
import MyProfile from './views/MyProfile';
import MyMessages from './views/MyMessages';
import ChattingRooms from './views/ChattingRooms';
import Chatting from './views/Chatting';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={HomeMenu} />
            <Route exact path='/myprofile' component={MyProfile} />
            <Route exact path='/mymessages' component={MyMessages} />
            <Route exact path='/chattingrooms' component={ChattingRooms} />
            <Route exact path='/chatting' component={Chatting} />
            <Route path='/about' component={About} />
        </BrowserRouter>
    );
}

export default App;
