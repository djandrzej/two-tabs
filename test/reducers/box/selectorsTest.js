/*eslint-disable no-magic-numbers*/
import expect from 'expect';

import {getSelectedTabIndex} from '../../../src/reducers/box/selectors';

const exampleTabIndex = 43;
const exampleState = {
    selectedTabIndex: exampleTabIndex
};

describe('box selectors', () => {
    describe('getSelectedTabIndex', () => {
        it('should return selected tab index', () => {
            expect(getSelectedTabIndex(exampleState)).toEqual(exampleTabIndex);
        });
    });
});
