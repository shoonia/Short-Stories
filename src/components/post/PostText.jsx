import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostText = ({ text }) => {
    const ps = text.split( /\n/g );
    return (
        <Fragment>
            { ps.map((p, i) => p.trim() == ''
                ? <br key={i} />
                : <p key={i}>{p}</p>
            ) }
        </Fragment>
    );
};

PostText.propTypes = {
    text: PropTypes.string.isRequired
};

export default PostText;
