import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App Component", () => {
 test("renders correctly", () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.exists()).toBe(true);
 });
});


