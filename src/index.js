import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import  thunkMiddleware from 'redux-thunk'

import reducer from './store/reducers/index';
import Main from "./Main/Main";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-viewer/dist/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './index.css';
import * as axios from "axios";
import {actionChangeSetTimeOut} from "./store/actions/actions";
import {operationStop} from "./Scan/serviceScan";
import {dispatchs} from "./store/dispatchs";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

axios.interceptors.request.use(
    (config) => {
        config = Object.assign({}, config);
        config.headers.PWT = store.getState().loginReducer.pwt;
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
  );

setInterval(
    () => {
        if (store.getState().scanReducer.isGetOrderFromWork) {
            store.dispatch(actionChangeSetTimeOut(store.getState().scanReducer.timeout - 1));
            if (store.getState().scanReducer.timeout < 0) {
                operationStop({state: store.getState(), dispatch: dispatchs(store.dispatch).dispatch});
            }
        }
    },
    1000
)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
