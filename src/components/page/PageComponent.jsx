import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import { setPage } from '../../store/actions/page';
import { fetchPostsByPageIndex } from '../../store/actions/posts';
import Loader from '../loader/Loader.jsx';
import PageList from './PageList.jsx';

const NotFound = Loadable({
    loader: () => import('../not-found/NotFound.jsx' /* webpackChunkName: "not-found" */),
    loading: Loader
});

class PageComponent extends React.PureComponent {
    state = {
        isPageExist: true,
        currentPage: []
    };

    componentDidMount () {
        this.findPage(this.props.index);

        if (this.props.isFirstVisit) {
            this.props.setPage();
        }
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.index !== nextProps.index) {
            this.findPage(nextProps.index);
        }
    }

    findPage = index => {
        const posts = this.props.posts;

        if (index in posts) {
            this.setState({ currentPage: posts[index], isPageExist: true });
        } else {
            this.props.fetchPostsByPageIndex(index)
                .then(currentPage => {
                    if (currentPage !== null) {
                        this.setState({ currentPage, isPageExist: true });
                    } else {
                        this.setState({ isPageExist: false });
                    }
                });
        }
    };

    render () {
        const { isPageExist, currentPage } = this.state;

        return isPageExist
            ? <PageList items={currentPage} />
            : <NotFound />;
    }
}

PageComponent.propTypes = {
    index: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    isFirstVisit: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired,
    fetchPostsByPageIndex: PropTypes.func.isRequired,
    posts: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => ({
    isFirstVisit: state.page.isFirstVisit,
    posts: state.posts
});

const mapStateToDispatch = {
    setPage,
    fetchPostsByPageIndex
};

export default connect(mapStateToProps, mapStateToDispatch)(PageComponent);
