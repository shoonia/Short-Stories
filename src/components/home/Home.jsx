import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FadeIn } from '../animations';

class Home extends React.PureComponent {
    render () {
        return (
            <Fragment>
                <FadeIn className="jumbotron jumbotron-fluid text-center" role="banner">
                    <h2 className="display-4 mb-5">Short Stories</h2>
                    <Link to="/page/1" className="btn btn-lg btn-info pr-5 pl-5">
                        Read All
                    </Link>
                </FadeIn>
            </Fragment>
        );
    }
}

export default Home;
