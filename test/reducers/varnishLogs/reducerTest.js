import expect from 'expect';
import varnishLogsReducer from '../../../src/reducers/varnishLogs';

import {
    FETCH_VARNISH_LOGS,
    FETCH_VARNISH_LOGS_SUCCESS,
    FETCH_VARNISH_LOGS_FAILURE
} from '../../../src/reducers/varnishLogs/types';

describe('varnishLogs reducer', () => {
    it('should return initial state', () => {
        expect(varnishLogsReducer(undefined, {})).toEqual({
            isFetching: false,
            errorMessage: null,
            logs: []
        });
    });

    it('should handle FETCH_VARNISH_LOGS', () => {
        const exampleAction = {
            type: FETCH_VARNISH_LOGS
        };
        expect(varnishLogsReducer(undefined, exampleAction)).toEqual({
            isFetching: true,
            errorMessage: null,
            logs: []
        });
    });

    it('should handle FETCH_VARNISH_LOGS_SUCCESS', () => {
        const exampleResponse = [{
            id: 1, name: 'example1'
        }, {
            id: 2, name: 'example2'
        }];
        const exampleAction = {
            type: FETCH_VARNISH_LOGS_SUCCESS,
            response: exampleResponse
        };
        expect(varnishLogsReducer(undefined, exampleAction)).toEqual({
            isFetching: false,
            errorMessage: null,
            logs: exampleResponse
        });
    });

    it('should handle FETCH_VARNISH_LOGS_FAILURE', () => {
        const exampleError = 'Example error message';
        const exampleAction = {
            type: FETCH_VARNISH_LOGS_FAILURE,
            error: exampleError
        };
        expect(varnishLogsReducer(undefined, exampleAction)).toEqual({
            isFetching: false,
            errorMessage: exampleError,
            logs: []
        });
    });
});
