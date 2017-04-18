import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import List from '../../src/components/List';

/*eslint-disable no-magic-numbers*/
describe('List component', () => {
    it('should render a div with `List` class', () => {
        const wrapper = shallow(<List items={[1, 2, 3]}/>);
        expect(wrapper.find('div.List').length).toEqual(1);
    });

    it('should render a div with `List--title` class containing list title if title is defined', () => {
        const exampleTitle = 'Example title';
        const wrapper = shallow(<List items={[1, 2, 3]} title={exampleTitle}/>);
        expect(wrapper.find('div.List--title').text()).toEqual(exampleTitle);
    });

    it('should not contain a div with `List--title` class if title is not defined', () => {
        const wrapper = shallow(<List items={[1, 2, 3]}/>);
        expect(wrapper.find('div.List--title').length).toEqual(0);
    });

    it('should contain a ul with `List--content` class', () => {
        const wrapper = shallow(<List items={[1, 2, 3]}/>);
        expect(wrapper.find('ul.List--content').length).toEqual(1);
    });

    it('should render a li with `List--item` class for each item', () => {
        const wrapper = shallow(<List items={[1, 2, 3]}/>);
        expect(wrapper.find('li.List--item').length).toEqual(3);
    });

    it('should render a span with `List--item-index` with item position for each item when list is ordered', () => {
        const wrapper = shallow(<List items={['foo', 'bar', 'xyz']} ordered={true}/>);
        const foundElements = wrapper.find('span.List--item-index');
        expect(foundElements.length).toEqual(3);
        expect(foundElements.at(0).text()).toEqual('1.');
        expect(foundElements.at(1).text()).toEqual('2.');
        expect(foundElements.at(2).text()).toEqual('3.');
    });

    it('should call passed itemRenderer for each item', () => {
        const itemRenderer = createSpy();
        shallow(<List items={[1, 2, 3]} itemRenderer={itemRenderer}/>);
        expect(itemRenderer.calls.length).toEqual(3);
        itemRenderer.restore();
    });
});
