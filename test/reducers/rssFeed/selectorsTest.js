/*eslint-disable no-magic-numbers*/
import expect from 'expect';

import {isFetchingRssFeed, getArticlesOrderedByPublicationDate, getArticles} from '../../../src/reducers/rssFeed/selectors';

describe('rssFeed selectors', () => {
    describe('isFetchingRssFeed', () => {
        it('should return `true` if rss feed is being fetched', () => {
            const exampleState = {
                isFetching: true
            };
            expect(isFetchingRssFeed(exampleState)).toEqual(true);
        });

        it('should return `false` if rss feed is being fetched', () => {
            const exampleState = {
                isFetching: false
            };
            expect(isFetchingRssFeed(exampleState)).toEqual(false);
        });
    });

    describe('getArticles', () => {
        it('should return fetched articles', () => {
            const exampleArticles = [1, 3, 6];
            const exampleState = {
                articles: exampleArticles
            };
            expect(getArticles(exampleState)).toEqual(exampleArticles);
        });
    });

    describe('getArticlesOrderedByPublicationDate', () => {
        it('should return articles ordered by newest publication date', () => {
            const exampleArticles = [
                {title: 'A', publicationDate: '10-11-1996'},
                {title: 'B', publicationDate: '12-12-1998'},
                {title: 'C', publicationDate: '11-11-1995'}
            ];
            const exampleState = {
                articles: exampleArticles
            };
            const expectedArticles = [
                {title: 'B', publicationDate: '12-12-1998'},
                {title: 'A', publicationDate: '10-11-1996'},
                {title: 'C', publicationDate: '11-11-1995'}
            ];
            expect(getArticlesOrderedByPublicationDate(exampleState)).toMatch(expectedArticles);
        });
    });
});
