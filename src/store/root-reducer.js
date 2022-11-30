const { combineReducers } = require('redux');

/* eslint-disable */
import { positionReducer } from './positions/position-reducer';

export const rootReducer = combineReducers({
    positions: positionReducer,
});
