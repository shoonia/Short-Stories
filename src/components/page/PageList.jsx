import React from 'react';
import PropTypes from 'prop-types';

import PageItem from './PageItem.jsx';

const PageList = ({ items }) => (
    <main className="row">
        { items.map(item => (
            <PageItem key={item.id} {...item} />
        )) }
    </main>
);

PageList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PageList;
