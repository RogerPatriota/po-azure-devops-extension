import "es6-promise/auto";
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import "./styles/main.css";
import "./styles/main.scss";
import *as SDK from "azure-devops-extension-sdk"



export function showRootComponent(component: React.ReactElement<any>) {
    ReactDOM.render(component, document.getElementById('root'));
}

SDK.init()

SDK.ready().then(() => {
    console.log('Azure DevOps SDK is up and running')
    showRootComponent(<App />);
} )
