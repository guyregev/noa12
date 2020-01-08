import { combineReducers } from 'redux';
import {words} from "../words/redux/reducers";
import {users} from "../user/redux/reducers";

/*
export const appError = (state: any, action) => {
    if (action.type === APP_ERROR) {
        return action.error;
    }
    return state || null;
};
*/
export const rootReducer = combineReducers({
    // reducers should be imported from the app and mapped here
    users,
    words,
});
