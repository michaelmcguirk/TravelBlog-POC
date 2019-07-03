import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MapContainer from '../MapContainer';


Enzyme.configure({adapter: new Adapter()});

describe("MapContainer component", () => {
    test("renders correctly", () => {
        const wrapper = shallow(<MapContainer/>);
        expect(wrapper.exists()).toBe(true);
    })
});