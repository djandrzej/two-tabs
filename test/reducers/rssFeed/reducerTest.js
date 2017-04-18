import expect from 'expect';
import rssFeedReducer from '../../../src/reducers/rssFeed';

import {FETCH_RSS_FEED, FETCH_RSS_FEED_SUCCESS, FETCH_RSS_FEED_FAILURE} from '../../../src/reducers/rssFeed/types';

describe('rssFeed reducer', () => {
    it('should return initial state', () => {
        expect(rssFeedReducer(undefined, {})).toEqual({
            isFetching: false,
            errorMessage: null,
            articles: []
        });
    });

    it('should handle FETCH_RSS_FEED', () => {
        const exampleAction = {
            type: FETCH_RSS_FEED
        };
        expect(rssFeedReducer(undefined, exampleAction)).toEqual({
            isFetching: true,
            errorMessage: null,
            articles: []
        });
    });

    it('should handle FETCH_RSS_FEED_SUCCESS', () => {
        const exampleResponse = [{
            id: 1, name: 'example1'
        }, {
            id: 2, name: 'example2'
        }];
        const exampleAction = {
            type: FETCH_RSS_FEED_SUCCESS,
            response: exampleResponse
        };
        expect(rssFeedReducer(undefined, exampleAction)).toEqual({
            isFetching: false,
            errorMessage: null,
            articles: exampleResponse
        });
    });

    it('should handle FETCH_RSS_FEED_FAILURE', () => {
        const exampleError = 'Example error message';
        const exampleAction = {
            type: FETCH_RSS_FEED_FAILURE,
            error: exampleError
        };
        expect(rssFeedReducer(undefined, exampleAction)).toEqual({
            isFetching: false,
            errorMessage: exampleError,
            articles: []
        });
    });
});
