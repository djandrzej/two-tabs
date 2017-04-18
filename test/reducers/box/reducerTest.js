import expect from 'expect';
import boxReducer from '../../../src/reducers/box';

import {SELECT_TAB} from '../../../src/reducers/box/types';

describe('box reducer', () => {
    it('should return initial state', () => {
        expect(boxReducer(undefined, {})).toEqual({selectedTabIndex: 0});
    });

    it('should handle SELECT_TAB', () => {
        const exampleTabIndex = 4;
        const exampleAction = {
            type: SELECT_TAB,
            index: exampleTabIndex
        };
        expect(boxReducer(undefined, exampleAction)).toEqual({selectedTabIndex: exampleTabIndex});
    });
});
