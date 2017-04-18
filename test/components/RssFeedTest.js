/* eslint-disable no-magic-numbers */
import React from 'react';
import expect, {createSpy, restoreSpies} from 'expect';
import {shallow, mount} from 'enzyme';

import RssFeed from '../../src/components/RssFeed';
import Loader from '../../src/components/Loader';
import List from '../../src/components/List';

const exampleProps = {
    isFetching: false,
    fetch: f => f,
    articles: []
};

describe('RssFeed component', () => {
    afterEach(() => {
        restoreSpies();
    });

    it('should render as div with `RssFeed` class', () => {
        const wrapper = shallow(<RssFeed {...exampleProps}/>);
        expect(wrapper.find('div.RssFeed').length).toEqual(1);
    });

    it('should render Loader if `isFetching` is true', () => {
        const wrapper = shallow(<RssFeed {...exampleProps} isFetching={true}/>);
        expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('should not render Loader if `isFetching` is false', () => {
        const wrapper = shallow(<RssFeed {...exampleProps}/>);
        expect(wrapper.find(Loader).length).toEqual(0);
    });

    it('should render List with `articles` passed if is not fetching', () => {
        const exampleArticles = [1, 4, 6];
        const wrapper = shallow(<RssFeed {...exampleProps} articles={exampleArticles}/>);
        const foundList = wrapper.find(List);
        expect(foundList.length).toEqual(1);
        expect(foundList.props().items).toEqual(exampleArticles);
    });

    it('should call `fetch` callback on mounting when is not fetching', () => {
        const fetch = createSpy();
        mount(<RssFeed {...exampleProps} fetch={fetch}/>);
        expect(fetch).toHaveBeenCalled();
    });

    it('should not call `fetch` callback on mounting when is fetching', () => {
        const fetch = createSpy();
        mount(
            <RssFeed {...exampleProps}
                     fetch={fetch}
                     isFetching={true}
            />
        );
        expect(fetch).toNotHaveBeenCalled();
    });
});
