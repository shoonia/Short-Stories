import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FadeIn } from '../animations';
import { toLocaleString } from '../../utils/date';

const PageItem = ({ id, title, author, text, created_at}) => {
    const href = `/post/${id}`;
    const shortContent = text.slice(0, 136) + ' ...';

    return (
        <FadeIn className="col-md-6">
            <section className="card mb-4">
                <div className="card-header">
                    <h3 className="card-title">
                        <Link to={href}>{ title }</Link>
                    </h3>
                    <span className="lead">{ author }</span>
                </div>
                <div className="card-body">
                    <p>{ shortContent }</p>
                    <time className="text-muted" dateTime={created_at}>
                        {toLocaleString(created_at)}
                    </time>
                </div>
            </section>
        </FadeIn>
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
