import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store_redux";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));




serviceWorker.unregister();
