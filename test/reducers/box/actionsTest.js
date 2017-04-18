import expect from 'expect';

import {selectTab} from '../../../src/reducers/box/actions';
import {SELECT_TAB} from '../../../src/reducers/box/types';

/*eslint-disable no-magic-numbers*/
describe('box action creators', () => {
    describe('selectTab', () => {
        it('it should dispatch SELECT_TAB', () => {
            const exampleTabIndex = 14;
            expect(selectTab(exampleTabIndex))
                .toEqual({
                    type: SELECT_TAB,
                    index: exampleTabIndex
                });
        });
    });
});
