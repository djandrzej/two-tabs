import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Loader from '../../src/components/Loader';

describe('Loader component', () => {
    it('should render a div with `Loader` class', () => {
        const wrapper = shallow(<Loader/>);
        expect(wrapper.find('div.Loader').length).toEqual(1);
    });
});
