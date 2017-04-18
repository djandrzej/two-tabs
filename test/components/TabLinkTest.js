import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import TabLink from '../../src/components/TabLink';

describe('TabLink component', () => {
    const exampleProps = {
        index: 0,
        label: 'ExampleLabel',
        isSelected: false,
        onClick: () => {}
    };

    it('should render as li with `TabLink` class', () => {
        const wrapper = shallow(<TabLink {...exampleProps}/>);
        expect(wrapper.find('li.TabLink').length).toEqual(1);
    });

    it('should have `TabLink--selected` class if TabLink is selected', () => {
        const wrapper = shallow(<TabLink {...exampleProps} isSelected={true}/>);
        expect(wrapper.find('li.TabLink--selected').length).toEqual(1);
    });

    it('should contain a label', () => {
        const wrapper = shallow(<TabLink {...exampleProps}/>);
        expect(wrapper.contains(exampleProps.label)).toEqual(true);
    });

    it('should invoke a callback with index as parameter when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<TabLink {...exampleProps} onClick={onClick}/>);
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalledWith(exampleProps.index);
    });
});
