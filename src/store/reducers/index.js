import {combineReducers} from 'redux';

import {menuReducer} from "./menuReducer";
import {loginReducer} from "./loginReducer";
import {journalReducer} from "./journalReducer";

export default combineReducers(
    {

        menuReducer,
        loginReducer,
        journalReducer

    }
);