import {FETCH_RSS_FEED, FETCH_RSS_FEED_SUCCESS, FETCH_RSS_FEED_FAILURE} from './types';

import api from '../../api';

export function fetchRssFeed() {
    return dispatch => {
        dispatch({
            type: FETCH_RSS_FEED
        });
        return api.getRssFeed()
            .then(response => dispatch({
                type: FETCH_RSS_FEED_SUCCESS,
                response
            }))
            .catch(error => dispatch({
                type: FETCH_RSS_FEED_FAILURE,
                error
            }));
    };
}
