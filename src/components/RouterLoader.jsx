import React from 'react';
import { Switch, Route } from 'react-router';
import Loadable from 'react-loadable';

import Loader from './loader/Loader.jsx';

const NotFound = Loadable({
    loader: () => import('./not-found/NotFound.jsx' /* webpackChunkName: "not-found" */),
    loading: Loader
});

const Home = Loadable({
    loader: () => import('./home/Home.jsx', /* webpackChunkName: "home" */),
    loading: Loader
});

const RouterLoader = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>
);

export default RouterLoader;
