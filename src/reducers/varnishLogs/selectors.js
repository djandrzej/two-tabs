import {createSelector} from 'reselect';

export const isFetchingVarnishLogs = state => state.isFetching;

export const getLogs = state => state.logs;

export const getHostnamesOrderedByTraffic = createSelector(
    getLogs,
    logs => {
        const groupedHostnames = {};
        logs.forEach(log => {
            if (!groupedHostnames[log.hostname]) {
                groupedHostnames[log.hostname] = 0;
            }
            groupedHostnames[log.hostname] += 1;
        });
        return Object.keys(groupedHostnames)
            .map(hostname => ({
                hostname, requestCount: groupedHostnames[hostname]
            }))
            .sort((a, b) => b.requestCount - a.requestCount)
            .map(entry => entry.hostname);
    }
);

export const getFilesOrderedByRequestCount = createSelector(
    getLogs,
    logs => {
        const groupedFiles = {};
        logs.forEach(log => {
            if (!groupedFiles[log.url]) {
                groupedFiles[log.url] = 0;
            }
            groupedFiles[log.url] += 1;
        });
        return Object.keys(groupedFiles)
            .map(url => ({
                url, requestCount: groupedFiles[url]
            }))
            .sort((a, b) => b.requestCount - a.requestCount)
            .map(entry => entry.url);
    }
);
