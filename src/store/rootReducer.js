import { combineReducers } from 'redux';

import page from './reducers/page';
import posts from './reducers/posts';

export default combineReducers({
    page,
    posts
});
