import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount} from 'enzyme';
import BlogContentContainer from '../BlogContentContainer';

Enzyme.configure({adapter: new Adapter()});

const mockPlace = {
    currentSelected: {
        location:{
            address: "Test Place",
            lat: "-25.5401",
            lng: "-25.5401"
        }, 
        gallery: [
            {
            height: 3,
            width: 5,
            src: "www.image",
        }], 
        content: "Some test content"
    }
}

describe("BlogContentContainer component", () => {
    test("renders correctly", () => {
        const wrapper = shallow(<BlogContentContainer place={mockPlace}/>);
        expect(wrapper.exists()).toBe(true);
    });
});