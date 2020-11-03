import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CalcDed from './CalcDed.jsx';

afterEach(cleanup);

test('App snapshot', () => {
  const { asFragment } = render(<CalcDed />);
  expect(asFragment()).toMatchSnapshot();
});
