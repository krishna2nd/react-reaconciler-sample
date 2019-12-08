import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import MyRender from "./MyRender";
// MyRender.render(<App />, document.getElementById('root'));


import Command from "./Cmd";
import MyRender from "./CmdRender";

MyRender.render(<App />, new Command('root'));
