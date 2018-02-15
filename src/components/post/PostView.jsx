import React from 'react';
import PropTypes from 'prop-types';

import PostText from './PostText.jsx';
import { FadeIn } from '../animations';
import { toLocaleString } from '../../utils/date';

const PostView = ({ title, author, text, created_at }) => (
    <FadeIn className="container">
        <main className="col-md-8 mt-5 mb-3">
            <h1 className="display-4">{ title }</h1>
            <span className="lead">{ author }</span>
            <hr />
            <PostText text={text} />
            <time dateTime={created_at} className="text-muted">
                {toLocaleString(created_at)}
            </time>
        </main>
    </FadeIn>
);

PostView.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
};

export default PostView;
