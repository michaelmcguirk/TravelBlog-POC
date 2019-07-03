import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount} from 'enzyme';
import BlogContainer from '../BlogContainer';
import BlogContentContainer from '../BlogContentContainer';

Enzyme.configure({adapter: new Adapter()});

describe("BlogContainer component", () => {
    test("renders correctly", () => {
        const wrapper = shallow(<BlogContainer/>);
        expect(wrapper.exists()).toBe(true);
    });
});