import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './navbar/Navbar.jsx';
import RouterLoader from './RouterLoader.jsx';
import store from '../store';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Fragment>
                <Navbar />
                <RouterLoader />
            </Fragment>
        </Provider>
    </BrowserRouter>
);

export default App;
