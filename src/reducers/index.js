import {combineReducers} from 'redux';

import box from './box';
import rssFeed from './rssFeed';
import varnishLogs from './varnishLogs';

export default combineReducers({
    box,
    rssFeed,
    varnishLogs
});
