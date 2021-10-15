import {combineReducers} from 'redux';
import memberreducer from './memberreducer.js';
import errors from "./errors";
import messages from "./messages";
import auth from './auth';

export default combineReducers({
    memberreducer,
    errors,
    messages,
    auth
})