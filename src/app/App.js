import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Route, HashRouter, Link} from 'react-router-dom';

import reducer from './../reducers';
import Scan from "../scan/scan";
import Journal from "../journal/journal";
import Nav from "../nav/nav";

import {Layout} from 'antd';

const {Content} = Layout;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Layout style={{'height': '100%'}}>
                    <Nav />
                    <Content style={{padding: '0 10px', marginTop: 50}}>
                        <div style={{background: '#fff', padding: 24}}>
                            <Route exact name={'scan'} path='/scan' component={Scan}/>
                            <Route exact name={'journal'} path='/' component={Journal}/>
                            <Route exact name={'journal'} path='/journal' component={Journal}/>
                        </div>
                    </Content>
                </Layout>
            </HashRouter>
        </Provider>
    )
}

export default App;
