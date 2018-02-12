import axios from 'axios';

import { SET_PAGE } from '../types';

export function setPageSuccess (payload) {
    return {
        type: SET_PAGE,
        payload
    };
}

export function setPage () {
    return dispatch => axios.post('/page/init')
        .then(res => {
            dispatch(setPageSuccess({
                isFirstVisit: false,
                totalPages: res.data.totalPages
            }));
        });
}
