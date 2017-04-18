import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import WebFont from 'webfontloader';

import App from './containers/App';

import store from './store';

import './styles/main.less';

function init() {
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('app')
    );
}

WebFont.load({
    google: {
        families: ['Roboto:400,300,600']
    },
    active: init,
    inactive: init
});
