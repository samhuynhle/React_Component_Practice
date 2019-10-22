import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Subheader from './Subheader';
import Body from './Body';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Subheader />, document.getElementById('subheader'));
ReactDOM.render(<Body />, document.getElementById('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();