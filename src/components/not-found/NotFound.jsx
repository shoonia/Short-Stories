import React from 'react';
import { NavLink } from 'react-router-dom';

import { FadeIn } from '../animations';

const NotFound = () => (
    <div className="container pt-5">
        <FadeIn className="alert alert-danger" role="alert">
            <h1 className="alert-heading">404: Not Found!</h1>
            <NavLink to="/" className="btn btn-outline-info mt-3">
                Home Page
            </NavLink>
        </FadeIn>
    </div>
);

export default NotFound;
