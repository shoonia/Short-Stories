import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RouterLoader from './RouterLoader.jsx';
import store from '../store';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <RouterLoader />
        </Provider>
    </BrowserRouter>
);

export default App;
