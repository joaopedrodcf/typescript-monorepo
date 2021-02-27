import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

ReactDOM.hydrate(
    <App text="Hello World (hydrated)" />,
    document.getElementById('root')
);
