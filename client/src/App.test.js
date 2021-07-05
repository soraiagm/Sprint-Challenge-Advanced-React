import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('app renders without crashing', () => {
  render(<App/>);
});

test('renders an element with the text Player list', () => {
    const wrapper = render(
      <Navbar />
    )
    const element = wrapper.queryByText(/player list/i);
    expect(wrapper).toBeVisible
    expect(element).toBeInTheDocument
});






