import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../src/reducers/index';
import box from '../../src/reducers/box';
import rssFeed from '../../src/reducers/rssFeed';
import varnishLogs from '../../src/reducers/varnishLogs';

describe('root reducer', () => {
    const store = createStore(rootReducer);

    it('should contain `box` reducer', () => {
        expect(store.getState().box)
            .toEqual(box(undefined, {}));
    });

    it('should contain `rssFeed` reducer', () => {
        expect(store.getState().rssFeed)
            .toEqual(rssFeed(undefined, {}));
    });

    it('should contain `varnishLogs` reducer', () => {
        expect(store.getState().varnishLogs)
            .toEqual(varnishLogs(undefined, {}));
    });
});
