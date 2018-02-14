import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageItem = ({ id, title, author, text, created_at}) => {
    const href = `/post/${id}`;
    const shortContent = text.slice(0, 136) + ' ...';

    return (
        <section className="card mb-4">
            <div className="card-header">
                <h3 className="card-title">
                    <Link to={href}>{ title }</Link>
                </h3>
                <span className="lead">{ author }</span>
            </div>
            <div className="card-body">
                <p>{ shortContent }</p>
                <time dataTime={created_at}>{ created_at }</time>
            </div>
        </section>
    );
};

PageItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
};

export default PageItem;
