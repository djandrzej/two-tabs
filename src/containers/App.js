import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Box from '../components/Box';

import * as boxActions from '../reducers/box/actions';
import * as rssFeedActions from '../reducers/rssFeed/actions';
import * as varnishLogsActions from '../reducers/varnishLogs/actions';
import {getSelectedTabIndex} from '../reducers/box/selectors';
import {isFetchingRssFeed, getArticlesOrderedByPublicationDate} from '../reducers/rssFeed/selectors';
import {
    isFetchingVarnishLogs,
    getHostnamesOrderedByTraffic,
    getFilesOrderedByRequestCount
} from '../reducers/varnishLogs/selectors';

const mapStateToProps = state => ({
    selectedTabIndex: getSelectedTabIndex(state.box),
    isFetchingVarnishLogs: isFetchingVarnishLogs(state.varnishLogs),
    hostnames: getHostnamesOrderedByTraffic(state.varnishLogs),
    files: getFilesOrderedByRequestCount(state.varnishLogs),
    isFetchingRssFeed: isFetchingRssFeed(state.rssFeed),
    articles: getArticlesOrderedByPublicationDate(state.rssFeed)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(boxActions, dispatch),
    ...bindActionCreators(rssFeedActions, dispatch),
    ...bindActionCreators(varnishLogsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
