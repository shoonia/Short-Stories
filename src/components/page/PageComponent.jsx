import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPage } from '../../store/actions/page';

class PageComponent extends React.PureComponent {

    componentDidMount () {
        if (this.props.isFirstVisit) {
            this.props.setPage();
        }
    }

    render () {
        return (
            <div></div>
        );
    }
}

PageComponent.propTypes = {
    index: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    isFirstVisit: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isFirstVisit: state.page.isFirstVisit
});

const mapStateToDispatch = {
    setPage
};

export default connect(mapStateToProps, mapStateToDispatch)(PageComponent);
