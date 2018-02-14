import { combineReducers } from 'redux';

import pagination from './reducers/pagination';
import posts from './reducers/posts';

export default combineReducers({
    pagination,
    posts
});
