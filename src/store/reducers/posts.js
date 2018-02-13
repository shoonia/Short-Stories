import { SET_POSTS } from '../types';

export default function postsReducer (state = {}, action = {}) {
    switch (action.type) {

    case SET_POSTS:
        return {
            ...state,
            ...action.payload
        };
    
    default:
        return state;
    }
}
