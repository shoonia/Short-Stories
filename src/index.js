import React from 'react';
import Loadable from 'react-loadable';
import { render } from 'react-dom';

import Loader from './components/loader/Loader.jsx';

const App = Loadable({
    loader: () => import('./components/App.jsx' /* webpackChunkName: "app" */),
    loading: Loader
});

render(
    React.createElement(App),
    document.getElementById('app')
);
