import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/not-found';
import Home from '../pages/home';
import About from '../pages/about';
import Contacts from '../pages/contacts';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route component={NotFound} />
        </Switch>
    );
};
