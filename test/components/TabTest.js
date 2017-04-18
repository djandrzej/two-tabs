import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Tab from '../../src/components/Tab';

describe('Tab component', () => {
    it('should render a div with `Tab` class', () => {
        const wrapper = shallow(<Tab label="Label">Content</Tab>);
        expect(wrapper.find('div.Tab').length).toEqual(1);
    });

    it('should render passed children', () => {
        const exampleContent = <div>Content</div>;
        const wrapper = shallow(<Tab label="Label">{exampleContent}</Tab>);
        expect(wrapper.contains(exampleContent)).toEqual(true);
    });
});
