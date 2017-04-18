/*eslint-disable no-magic-numbers*/
import expect from 'expect';

import {
    isFetchingVarnishLogs,
    getFilesOrderedByRequestCount,
    getHostnamesOrderedByTraffic
} from '../../../src/reducers/varnishLogs/selectors';

const exampleLogs = [
    {hostname: 'A', url: 'X'},
    {hostname: 'B', url: 'Y'},
    {hostname: 'C', url: 'Z'},
    {hostname: 'A', url: 'X'},
    {hostname: 'A', url: 'X'},
    {hostname: 'B', url: 'Y'},
    {hostname: 'A', url: 'X'},
    {hostname: 'A', url: 'X'},
    {hostname: 'A', url: 'X'}
];

describe('varnishLogs selectors', () => {
    describe('isFetchingVarnishLogs', () => {
        it('should return `true` if rss feed is being fetched', () => {
            const exampleState = {
                isFetching: true
            };
            expect(isFetchingVarnishLogs(exampleState)).toEqual(true);
        });

        it('should return `false` if rss feed is being fetched', () => {
            const exampleState = {
                isFetching: false
            };
            expect(isFetchingVarnishLogs(exampleState)).toEqual(false);
        });
    });

    describe('getFilesOrderedByRequestCount', () => {
        it('should return grouped urls ordered from most to least requests made', () => {
            const exampleState = {
                logs: exampleLogs
            };
            expect(getFilesOrderedByRequestCount(exampleState))
                .toMatch(['X', 'Y', 'Z']);
        });
    });

    describe('getHostnamesOrderedByTraffic', () => {
        it('should return grouped hostnames ordered from most to least requests made', () => {
            const exampleState = {
                logs: exampleLogs
            };
            expect(getHostnamesOrderedByTraffic(exampleState))
                .toMatch(['A', 'B', 'C']);
        });
    });
});
