import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducer from '../store/reducers';
import { initialState } from '../store/reducers';
//Si tengo store lo importo, sino lo creo
// import store from '../store';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
);

export default ProviderMock;