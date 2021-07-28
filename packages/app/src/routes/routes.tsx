import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const HomeLoadable = loadable(() => import('../pages/home'), {
    fallback: <div>route loading ...</div>,
});
const AboutLoadable = loadable(() => import('../pages/about'), {
    fallback: <div>route loading ...</div>,
});
const ContactsLoadable = loadable(() => import('../pages/contacts'), {
    fallback: <div>route loading ...</div>,
});
const NotFoundLoadable = loadable(() => import('../pages/not-found'), {
    fallback: <div>route loading ...</div>,
});

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeLoadable} />
            <Route path="/about" component={AboutLoadable} />
            <Route path="/contacts" component={ContactsLoadable} />
            <Route component={NotFoundLoadable} />
        </Switch>
    );
};
