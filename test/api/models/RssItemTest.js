import expect from 'expect';

import RssItem from '../../../src/api/models/RssItem';

describe('RssItem model constructor', () => {
    it('should return a proper instance of RssItem', () => {
        const exampleTitle = 'ABC';
        const exampleDate = '10-11-1970';
        const instance = new RssItem(exampleTitle, exampleDate);
        expect(instance.title).toEqual(exampleTitle);
        expect(instance.publicationDate).toEqual(exampleDate);
    });
});
