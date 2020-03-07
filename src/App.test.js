import React from 'react';
import { render } from '@testing-library/react';
import SegmentedControl from './components/SegmentedControl';

it('renders welcome message', () => {
  const { container } = render(<SegmentedControl />);
  container.querySelector('.seg-area');
  expect(container.firstChild).toMatchSnapshot()
});
