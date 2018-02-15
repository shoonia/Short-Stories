import React from 'react';
import PropTypes from 'prop-types';

import PostText from './PostText.jsx';
import { FadeInMain } from '../animations';

const PostView = ({ title, author, text, created_at }) => (
    <FadeInMain className="container">
        <h1 className="display-4">{ title }</h1>
        <span className="lead">{ author }</span>
        <hr />
        <PostText text={text} />
        <time dateTime={created_at} className="text-muted">
            {created_at}
        </time>
    </FadeInMain>
);

PostView.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
};

export default PostView;
