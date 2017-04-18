import expect, {spyOn, restoreSpies} from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import api from '../../../src/api';
import {fetchVarnishLogs} from '../../../src/reducers/varnishLogs/actions';
import {
    FETCH_VARNISH_LOGS,
    FETCH_VARNISH_LOGS_SUCCESS,
    FETCH_VARNISH_LOGS_FAILURE
} from '../../../src/reducers/varnishLogs/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/*eslint-disable no-magic-numbers*/
describe('varnishLogs action creators', () => {
    describe('fetchVarnishLogs', () => {
        let store;

        beforeEach(() => {
            store = mockStore();
        });

        afterEach(() => {
            restoreSpies();
        });

        it('should return a function', () => {
            expect(fetchVarnishLogs()).toBeA('function');
        });

        it('it should dispatch FETCH_VARNISH_LOGS and then FETCH_VARNISH_LOGS_SUCCESS if fetching succeed', () => {
            const exampleVarnishLogs = [1, 3, 5, 7];
            spyOn(api, 'getVarnishLogs').andCall(() => Promise.resolve(exampleVarnishLogs));
            const expectedActions = [{
                type: FETCH_VARNISH_LOGS
            }, {
                type: FETCH_VARNISH_LOGS_SUCCESS,
                response: exampleVarnishLogs
            }];
            return store.dispatch(fetchVarnishLogs()).then(() => expect(store.getActions()).toMatch(expectedActions));
        });

        it('it should dispatch FETCH_VARNISH_LOGS and then FETCH_VARNISH_LOGS_FAILURE if fetching failed', () => {
            const exampleErrorMessage = 'Error occurred';
            spyOn(api, 'getVarnishLogs').andCall(() => Promise.reject(exampleErrorMessage));
            const expectedActions = [{
                type: FETCH_VARNISH_LOGS
            }, {
                type: FETCH_VARNISH_LOGS_FAILURE,
                error: exampleErrorMessage
            }];
            return store.dispatch(fetchVarnishLogs()).then(() => expect(store.getActions()).toMatch(expectedActions));
        });
    });
});
