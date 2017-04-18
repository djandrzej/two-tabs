import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import App from '../../src/containers/App';
import Box from '../../src/components/Box';

const mockStore = configureStore([]);

let store;

const initialState = {
    box: {
        selectedTabIndex: 0
    },
    varnishLogs: {
        isFetching: false,
        logs: []
    },
    rssFeed: {
        isFetching: false,
        articles: []
    }
};

describe('App container', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render Box component', () => {
        const wrapper = shallow(<App store={store}/>);
        expect(wrapper.find(Box).length).toEqual(1);
    });
});
