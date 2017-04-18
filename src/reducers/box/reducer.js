import {SELECT_TAB} from './types';

const initialState = {
    selectedTabIndex: 0
};

export default function boxReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                selectedTabIndex: action.index
            };
    }
    return state;
}
