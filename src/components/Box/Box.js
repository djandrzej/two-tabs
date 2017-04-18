import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Tabs from '../Tabs';
import Tab from '../Tab';
import VarnishStats from '../VarnishStats';
import RssFeed from '../RssFeed';

export default class Box extends PureComponent {

    static propTypes = {
        selectedTabIndex: PropTypes.number.isRequired,
        selectTab: PropTypes.func.isRequired,
        isFetchingVarnishLogs: PropTypes.bool.isRequired,
        fetchVarnishLogs: PropTypes.func.isRequired,
        hostnames: PropTypes.array.isRequired,
        files: PropTypes.array.isRequired,
        isFetchingRssFeed: PropTypes.bool.isRequired,
        fetchRssFeed: PropTypes.func.isRequired,
        articles: PropTypes.array.isRequired
    };

    render() {
        const {
            selectedTabIndex,
            selectTab,
            isFetchingVarnishLogs,
            fetchVarnishLogs,
            hostnames,
            files,
            isFetchingRssFeed,
            fetchRssFeed,
            articles
        } = this.props;
        return (
            <Tabs selectedTabIndex={selectedTabIndex} onChange={selectTab}>
                <Tab label="Varnish logs">
                    <VarnishStats
                        isFetching={isFetchingVarnishLogs}
                        fetch={fetchVarnishLogs}
                        hostnames={hostnames}
                        files={files}
                    />
                </Tab>
                <Tab label="Rss feed">
                    <RssFeed
                        isFetching={isFetchingRssFeed}
                        fetch={fetchRssFeed}
                        articles={articles}
                    />
                </Tab>
            </Tabs>
        );
    }

}
