import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App.jsx';

afterEach(cleanup);

test('App snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
