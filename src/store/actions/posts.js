import axios from 'axios';
import { SET_POSTS } from '../types';

export function setPostsSuccess (posts) {
    return {
        type: SET_POSTS,
        payload: posts
    };
}

export function fetchPostsByPageIndex (index) {
    return dispatch => axios.post('/page/get-posts-by-page-index', { index })
        .then(res => {
            if (Array.isArray(res.data) && res.data.length > 0) {
                dispatch(setPostsSuccess({
                    [index]: res.data
                }));
                return res.data;
            }
            return null;
        }).catch(() => {
            return null;
        });
}
