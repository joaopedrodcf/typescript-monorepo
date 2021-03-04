import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';

const rootContainerId = 'root';

const container =
    document.getElementById(rootContainerId) ?? createContainer(document.body);

if (container.hasAttribute('data-ssr')) {
    ReactDOM.hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        container
    );
} else {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        container
    );
}

function createContainer(targetParent: Element) {
    const newContainer = document.createElement('div');
    newContainer.id = rootContainerId;
    return targetParent.appendChild(newContainer);
}
