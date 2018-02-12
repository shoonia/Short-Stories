import React from 'react';
import PropTypes from 'prop-types';

import PageComponent from './PageComponent.jsx';

const Page = ({ match, history }) => {
    const i = parseInt(match.params.index);
    const index = (!isNaN(i) && i > 0) ? i : 1;

    return (
        <PageComponent index={index} history={history} />
    );
};

Page.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            index: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    history: PropTypes.object.isRequired
};

export default Page;
