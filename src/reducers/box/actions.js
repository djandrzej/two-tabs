import {SELECT_TAB} from './types';

export function selectTab(index) {
    return {
        type: SELECT_TAB,
        index
    };
}
