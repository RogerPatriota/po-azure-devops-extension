import "es6-promise/auto";
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import "./styles/main.css";
import "./styles/main.scss";


export function showRootComponent(component: React.ReactElement<any>) {
    ReactDOM.render(component, document.getElementById('root'));
}

showRootComponent(<App />);