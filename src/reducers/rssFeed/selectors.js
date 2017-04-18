import {createSelector} from 'reselect';

export const isFetchingRssFeed = state => state.isFetching;

export const getArticles = state => state.articles;

export const getArticlesOrderedByPublicationDate = createSelector(
    getArticles,
    articles => articles.sort((a, b) => {
        const firstDate = new Date(a.publicationDate);
        const secondDate = new Date(b.publicationDate);
        return secondDate - firstDate;
    })
);
