import axios from 'axios';

import { SET_PAGINATION } from '../types';

export function setPaginagionSuccess (payload) {
    return {
        type: SET_PAGINATION,
        payload
    };
}

export function setPagination () {
    return dispatch => axios.post('/posts/init-pagination')
        .then(res => {
            dispatch(setPaginagionSuccess({
                isFirstVisit: false,
                pageCount: res.data.pageCount
            }));
        });
}
