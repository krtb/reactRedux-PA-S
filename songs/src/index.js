import React from 'react';
import ReactDOM from 'react-dom';
// Provider is component from react-redux lib, components with capitals.
import { Provider } from 'react-redux';
import {createStore} from 'redux';
// 3rd party above and my own below
import App from './components/App';
import reducers from './reducers'

// need to create an instance of provider and wrap app component with it
ReactDOM.render( 
    <Provider store={createStore(reducers)} >
    <App />
    </Provider>
    , 
    document.querySelector('#root')
);