import { SET_PAGE } from '../types';

export function setPageSuccess (payload) {
    return {
        type: SET_PAGE,
        payload
    };
}

export function setPage () {
    return dispatch => {
        dispatch(setPageSuccess({
            isFirstVisit: false
        }));
    };
}
