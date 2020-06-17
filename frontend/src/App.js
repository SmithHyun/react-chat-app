import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './views/About';
import HomeMenu from './views/Homemenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={HomeMenu} />
            <Route path='/about' component={About} />
        </BrowserRouter>
    );
}

export default App;
