import {FETCH_RSS_FEED, FETCH_RSS_FEED_SUCCESS, FETCH_RSS_FEED_FAILURE} from './types';

const initialState = {
    isFetching: false,
    errorMessage: null,
    articles: []
};

export default function boxReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RSS_FEED:
            return {
                ...state,
                isFetching: true,
                errorMessage: null
            };
        case FETCH_RSS_FEED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: null,
                articles: [...action.response]
            };
        case FETCH_RSS_FEED_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error
            };
    }
    return state;
}
