import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Popup from './Popup.jsx';

afterEach(cleanup);

test('App snapshot', () => {
  const { asFragment } = render(<Popup />);
  expect(asFragment()).toMatchSnapshot();
});
