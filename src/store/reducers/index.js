import {combineReducers} from 'redux';

import {menuReducer} from "./menuReducer";
import {loginReducer} from "./loginReducer";
import {journalReducer} from "./journalReducer";
import {scanReducer} from "./scanReducer";

export default combineReducers(
    {

        menuReducer,
        loginReducer,
        journalReducer,
        scanReducer

    }
);