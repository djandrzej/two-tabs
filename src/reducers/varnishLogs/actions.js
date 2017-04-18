import {FETCH_VARNISH_LOGS, FETCH_VARNISH_LOGS_SUCCESS, FETCH_VARNISH_LOGS_FAILURE} from './types';

import api from '../../api';

export function fetchVarnishLogs() {
    return dispatch => {
        dispatch({
            type: FETCH_VARNISH_LOGS
        });
        return api.getVarnishLogs()
            .then(response => dispatch({
                type: FETCH_VARNISH_LOGS_SUCCESS,
                response
            }))
            .catch(error => dispatch({
                type: FETCH_VARNISH_LOGS_FAILURE,
                error
            }));
    };
}
