import expect, {spyOn, restoreSpies} from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import api from '../../../src/api';
import {fetchRssFeed} from '../../../src/reducers/rssFeed/actions';
import {FETCH_RSS_FEED, FETCH_RSS_FEED_SUCCESS, FETCH_RSS_FEED_FAILURE} from '../../../src/reducers/rssFeed/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;

/*eslint-disable no-magic-numbers*/
describe('rssFeed action creators', () => {
    describe('fetchRssFeed', () => {
        beforeEach(() => {
            store = mockStore();
        });

        afterEach(() => {
            restoreSpies();
        });

        it('should return a function', () => {
            expect(fetchRssFeed()).toBeA('function');
        });

        it('it should dispatch FETCH_RSS_FEED and then FETCH_RSS_FEED_SUCCESS if fetching succeed', () => {
            const exampleRssFeedItems = [1, 3, 5, 7];
            spyOn(api, 'getRssFeed').andCall(() => Promise.resolve(exampleRssFeedItems));
            const expectedActions = [{
                type: FETCH_RSS_FEED
            }, {
                type: FETCH_RSS_FEED_SUCCESS,
                response: exampleRssFeedItems
            }];
            return store.dispatch(fetchRssFeed()).then(() => expect(store.getActions()).toMatch(expectedActions));
        });

        it('it should dispatch FETCH_RSS_FEED and then FETCH_RSS_FEED_FAILURE if fetching failed', () => {
            const exampleErrorMessage = 'Error occurred';
            spyOn(api, 'getRssFeed').andCall(() => Promise.reject(exampleErrorMessage));
            const expectedActions = [{
                type: FETCH_RSS_FEED
            }, {
                type: FETCH_RSS_FEED_FAILURE,
                error: exampleErrorMessage
            }];
            return store.dispatch(fetchRssFeed()).then(() => expect(store.getActions()).toMatch(expectedActions));
        });
    });
});
