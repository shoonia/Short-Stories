import React from 'react';
import { Switch, Route } from 'react-router';
import Loadable from 'react-loadable';

import Loader from './loader/Loader.jsx';

const loading = () => <Loader />;

const Home = Loadable({
    loader: () => import('./home/Home.jsx', /* webpackChunkName: "home" */),
    loading
});

const Page = Loadable({
    loader: () => import('./page/Page.jsx' /* webpackChunkName: "page" */),
    loading
});

const Post = Loadable({
    loader: () => import('./post/Post.jsx' /* webpackChunkName: "post" */),
    loading
});

const NotFound = Loadable({
    loader: () => import('./not-found/NotFound.jsx' /* webpackChunkName: "not-found" */),
    loading
});

const RouterLoader = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page/:index" component={Page} />
        <Route exact path="/post/:id" component={Post} />
        <Route component={NotFound} />
    </Switch>
);

export default RouterLoader;
