import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import 'antd/dist/antd.min.css';
import './index.css';

// init
sessionStorage.isProgressCheckLogin = 0;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
