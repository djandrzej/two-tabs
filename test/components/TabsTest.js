import React from 'react';
import expect, {createSpy, spyOn, restoreSpies} from 'expect';
import {shallow, mount} from 'enzyme';

import Tabs from '../../src/components/Tabs';
import Tab from '../../src/components/Tab';
import TabLink from '../../src/components/TabLink';

const exampleProps = {
    onChange: f => f
};

/*eslint-disable no-magic-numbers*/
describe('Tabs component', () => {
    const exampleContent1 = <div>Example content 1</div>;
    const exampleContent2 = <div>Example content 2</div>;
    const exampleContent3 = <div>Example content 3</div>;
    const exampleTabs = [
        <Tab label="A" key={1}>{exampleContent1}</Tab>,
        <Tab label="B" key={2}>{exampleContent2}</Tab>,
        <Tab label="C" key={3}>{exampleContent3}</Tab>
    ];

    afterEach(() => {
        restoreSpies();
    });

    it('should render as div with `Tabs` class', () => {
        const wrapper = shallow(<Tabs {...exampleProps}>{exampleTabs}</Tabs>);
        expect(wrapper.find('div.Tabs').length).toEqual(1);
    });

    it('should contain a div with `Tabs-header` class', () => {
        const wrapper = shallow(<Tabs {...exampleProps}>{exampleTabs}</Tabs>);
        expect(wrapper.find('div.Tabs-header').length).toEqual(1);
    });

    it('should contain a ul with `Tabs-header-list` class inside header', () => {
        const wrapper = shallow(<Tabs {...exampleProps}>{exampleTabs}</Tabs>);
        expect(wrapper.find('div.Tabs-header ul.Tabs-header-list').length).toEqual(1);
    });

    it('should render TabLink component for each passed Tab inside a ul with `Tabs-header-list` class', () => {
        const wrapper = shallow(<Tabs {...exampleProps}>{exampleTabs}</Tabs>);
        expect(wrapper.find('ul.Tabs-header-list').find(TabLink).length).toEqual(3);
    });

    it('should render currently selected Tab inside div with `Tabs-content` class', () => {
        const wrapper = shallow(<Tabs {...exampleProps} selectedTabIndex={1}>{exampleTabs}</Tabs>);
        expect(wrapper.find('div.Tabs-content').contains(exampleContent2)).toEqual(true);
    });

    it('should invoke a callback when TabLink is clicked', () => {
        const onChange = createSpy();
        const wrapper = mount(
            <Tabs
                {...exampleProps}
                selectedTabIndex={2}
                onChange={onChange}>
                {exampleTabs}
            </Tabs>
        );
        wrapper.find(TabLink).first()
            .simulate('click');
        expect(onChange).toHaveBeenCalledWith(0);
    });
});
