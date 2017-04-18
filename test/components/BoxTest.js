import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Box from '../../src/components/Box';
import Tab from '../../src/components/Tab';
import Tabs from '../../src/components/Tabs';
import VarnishLogs from '../../src/components/VarnishStats';
import RssFeed from '../../src/components/RssFeed';

const exampleProps = {
    selectedTabIndex: 0,
    selectTab: f => f,
    isFetchingVarnishLogs: false,
    fetchVarnishLogs: f => f,
    hostnames: [],
    files: [],
    isFetchingRssFeed: false,
    fetchRssFeed: f => f,
    articles: []
};

describe('Box component', () => {
    it('should render as Tabs component', () => {
        const wrapper = shallow(<Box {...exampleProps}/>);
        expect(wrapper.find(Tabs).length).toEqual(1);
    });

    it('should contain Tab with VarnishStats component', () => {
        const wrapper = shallow(<Box {...exampleProps}/>);
        const childrenWrapper = shallow(<div>{wrapper.find(Tabs).props().children}</div>);
        expect(childrenWrapper.find(VarnishLogs).length).toEqual(1);
    });

    it('should contain Tab with RssFeed component', () => {
        const wrapper = shallow(<Box {...exampleProps} selectedTabIndex={1}/>);
        const childrenWrapper = shallow(<div>{wrapper.find(Tabs).props().children}</div>);
        expect(childrenWrapper.find(Tab).find(RssFeed).length).toEqual(1);
    });
});
