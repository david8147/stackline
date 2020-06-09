import { combineReducers } from 'redux';
import {dataFetchReducer} from './dataFetch.js';

export const combinedReducers = combineReducers({
    dataFetchReducer
});

