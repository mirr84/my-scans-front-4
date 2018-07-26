import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './store/reducers/index';
import Main from "./Main/Main";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-viewer/dist/index.css';
import './index.css';

const store = createStore(reducer);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);