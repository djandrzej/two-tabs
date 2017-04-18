/* eslint-disable no-magic-numbers */
import React from 'react';
import expect, {createSpy, restoreSpies} from 'expect';
import {shallow, mount} from 'enzyme';

import VarnishStats from '../../src/components/VarnishStats';
import Loader from '../../src/components/Loader';
import List from '../../src/components/List';

const exampleProps = {
    isFetching: false,
    fetch: f => f,
    hostnames: [],
    files: []
};

describe('VarnishStats component', () => {
    afterEach(() => {
        restoreSpies();
    });

    it('should render as div with `VarnishStats` class', () => {
        const wrapper = shallow(<VarnishStats {...exampleProps}/>);
        expect(wrapper.find('div.VarnishStats').length).toEqual(1);
    });

    it('should render Loader if `isFetching` is true', () => {
        const wrapper = shallow(<VarnishStats {...exampleProps} isFetching={true}/>);
        expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('should not render Loader if `isFetching` is false', () => {
        const wrapper = shallow(<VarnishStats {...exampleProps}/>);
        expect(wrapper.find(Loader).length).toEqual(0);
    });

    it('should render List with 5 items from `hostnames` passed if is not fetching', () => {
        const exampleHostnames = [1, 4, 6, 11, 22, 55];
        const wrapper = shallow(<VarnishStats {...exampleProps} hostnames={exampleHostnames}/>);
        const foundList = wrapper.find(List).at(0);
        expect(foundList.length).toEqual(1);
        expect(foundList.props().items).toMatch([1, 4, 6, 11, 22]);
    });

    it('should render List with 5 items from `files` passed if is not fetching', () => {
        const exampleFiles = [1, 4, 6, 7, 9, 10, 23];
        const wrapper = shallow(<VarnishStats {...exampleProps} files={exampleFiles}/>);
        const foundList = wrapper.find(List).at(1);
        expect(foundList.length).toEqual(1);
        expect(foundList.props().items).toMatch([1, 4, 6, 7, 9]);
    });

    it('should call `fetch` callback on mounting when is not fetching', () => {
        const fetch = createSpy();
        mount(<VarnishStats {...exampleProps} fetch={fetch}/>);
        expect(fetch).toHaveBeenCalled();
    });

    it('should not call `fetch` callback on mounting when is fetching', () => {
        const fetch = createSpy();
        mount(
            <VarnishStats
                {...exampleProps}
                fetch={fetch}
                isFetching={true}
            />
        );
        expect(fetch).toNotHaveBeenCalled();
    });
});
