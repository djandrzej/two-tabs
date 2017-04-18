import {FETCH_VARNISH_LOGS, FETCH_VARNISH_LOGS_SUCCESS, FETCH_VARNISH_LOGS_FAILURE} from './types';

const initialState = {
    isFetching: false,
    errorMessage: null,
    logs: []
};

export default function boxReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_VARNISH_LOGS:
            return {
                ...state,
                isFetching: true,
                errorMessage: null
            };
        case FETCH_VARNISH_LOGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: null,
                logs: [...action.response]
            };
        case FETCH_VARNISH_LOGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error
            };
    }
    return state;
}
