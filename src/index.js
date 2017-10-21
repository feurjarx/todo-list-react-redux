import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import Provider from './helpers/Provider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {rootReducer} from './reducers';
import './index.css';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();