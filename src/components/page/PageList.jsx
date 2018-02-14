import React from 'react';
import PropTypes from 'prop-types';

import PageItem from './PageItem.jsx';

const PageList = ({ items }) => (
    <div className="col-6" role="group">
        { items.map(item => (
            <PageItem key={item.id} {...item} />
        )) }
    </div>
);

PageList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PageList;
