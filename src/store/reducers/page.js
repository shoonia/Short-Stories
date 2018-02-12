import { SET_PAGE } from '../types';

const initialState = {
    isFirstVisit: true,
    totalPages: 1
};

export default function pageReducer (state = initialState, action = {}) {
    switch (action.type) {

    case SET_PAGE:
        return {
            ...state,
            ...action.payload
        };

    default:
        return state;
    }
}
