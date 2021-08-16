import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/about/src/about';
import Contacts from '../pages/contatcs/src/contacts';
import Home from '../pages/home/src/home';
import NotFound from '../pages/not-found/src/not-found';

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
