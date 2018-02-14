import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { setPagination } from '../../store/actions/pagination';

class Pagination extends React.PureComponent {

    componentDidMount () {
        if (this.props.isFirstVisit) {
            this.props.setPagination();
        }
    }

    onPageChange = ({ selected }) => {
        this.props.history.push(`/page/${selected + 1}`);
    }

    render () {
        const { pageCount, index } = this.props;

        return (
            <nav>
                <ReactPaginate
                    pageCount={pageCount}
                    forcePage={index - 1}
                    onPageChange={this.onPageChange}

                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}

                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    disabledClassName="disabled"

                    previousClassName="page-item"
                    nextClassName="page-item"

                    previousLabel={<span>&laquo;</span>}
                    nextLabel={<span>&raquo;</span>}

                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"

                    breakLabel={<span className="page-link">...</span>}
                    breakClassName="page-item disabled"
                />
            </nav>
        );
    }
}

Pagination.propTypes = {
    index: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    isFirstVisit: PropTypes.bool.isRequired,
    setPagination: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

const mapStateToProps = state => ({
    isFirstVisit: state.pagination.isFirstVisit,
    pageCount: state.pagination.pageCount
});

const mapStateToDispatch = {
    setPagination
};

export default connect(mapStateToProps, mapStateToDispatch)(Pagination);
