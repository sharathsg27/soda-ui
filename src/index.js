import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import * as serviceWorker from './serviceWorker';
import {App} from "./App";
import {Add} from "./components/Add";
import {View} from "./components/View";
import {Edit} from "./components/Edit";


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/add' component={Add}/>
            <Route path='/view/:id' component={View}/>
            <Route path='/edit/:id' component={Edit}/>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


