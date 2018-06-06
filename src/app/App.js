import React, { Component } from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Route, HashRouter} from 'react-router-dom';

import reducer from './../reducers';
import ExampleAlerts from "../devComponent/exampleAlerts";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
          <Provider store={store}>
              <HashRouter>
                  <div>
                      <Route exact path='/scan' component={ExampleAlerts}/>
                  </div>
              </HashRouter>
          </Provider>
    );
  }
}

export default App;
