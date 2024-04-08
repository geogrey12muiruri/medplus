// in Redux a reducer is a function that determines changes 
// to an aplication's state. It uses the action it receives 
// to determine this change. In Redux, 
// all application state is stored as a single object. 
// It's a good idea to think of its shape before writing any code. 
// What's the minimal representation of your app's state as an object?

//the combineReducer function  allows you to combine multiple reducers into a single reducer
import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './userSlice.js'
import postsSlice from './postSlice.js';
import themeSlice from './theme.js'; 


//combineReducers function takes an object as an argument,
//where each key-value pair is a reducer
// the key is the name of the slice of state that the reducer manages
// the value is the reducer function itself
// the combineReducers function returns a single reducer function
// that can be passed to the createStore function
// rootReducer is the resultant of the combined reducers.

const rootReducer = combineReducers({
    user: userSlice,
    posts: postsSlice,
    theme: themeSlice,
});
// rootReducer is an object that represents the entire state of the state that represen
export { rootReducer };
