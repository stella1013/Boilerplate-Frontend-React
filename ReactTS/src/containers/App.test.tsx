import { shallow } from 'enzyme';
import React from 'react';
import App from './App';


describe('App', () => {
	const app = shallow(<App />);
	it('renders without crashing', () => {
		expect(app).toMatchSnapshot();
	});
});

