import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import _find from 'lodash-es/find';

import Loader from '../loader/Loader.jsx';
import PostView from './PostView.jsx';

const NotFound = Loadable({
    loader: () => import('../not-found/NotFound.jsx' /* webpackChunkName: "not-found" */),
    loading: () => Loader
});

class Post extends React.PureComponent {
    state = {
        isPostExist: true,
        currentPost: null
    };

    componentWillMount () {
        const id = parseInt(this.props.match.params.id);
        const currentPost = this.findPost(id);

        if (currentPost !== undefined) {
            this.setState({ currentPost });
        }
    }

    findPost = id => {
        const { posts } = this.props;

        for (let key in posts) {
            const item = _find( posts[key], { id });
            if (item !== undefined) {
                return item;
            }
        }
    }

    render () {
        const { isPostExist, currentPost } = this.state;

        return isPostExist
            ? currentPost == null
                ? <Loader />
                : <PostView {...currentPost} />
            : <NotFound />;
    }
}

Post.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    posts: PropTypes.objectOf(PropTypes.array).isRequired
};

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(Post);
