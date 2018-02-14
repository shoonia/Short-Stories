import { SET_PAGINATION } from '../types';

const initialState = {
    isFirstVisit: true,
    pageCount: 1
};

export default function paginationReducer (state = initialState, action = {}) {
    switch (action.type) {

    case SET_PAGINATION:
        return {
            ...state,
            ...action.payload
        };

    default:
        return state;
    }
}
