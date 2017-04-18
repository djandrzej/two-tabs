import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Article from '../../src/components/Article';

const exampleTitle = 'Example title';
const examplePublicationDate = 'Today';
const wrapper = shallow(<Article title={exampleTitle} publicationDate={examplePublicationDate}/>);

describe('Article component', () => {
    it('should render a div with `Article` class', () => {
        expect(wrapper.find('div.Article').length).toEqual(1);
    });

    it('should render a span with `Article--date` class with passed publication date', () => {
        const foundElement = wrapper.find('span.Article--date');
        expect(foundElement.length).toEqual(1);
        expect(foundElement.text()).toEqual(examplePublicationDate);
    });

    it('should render a span with `Article--title` class with passed title', () => {
        const foundElement = wrapper.find('span.Article--title');
        expect(foundElement.length).toEqual(1);
        expect(foundElement.text()).toEqual(exampleTitle);
    });
});
