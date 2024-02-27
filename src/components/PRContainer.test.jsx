import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import PRContainer from './PRContainer';
import '@testing-library/jest-dom'

test('renders total pull requests', async () => {
  render(<PRContainer />);

  await waitFor(() => {
    const totalPullRequestsElement = screen.getByText(/Total Pull Requests/i);
    expect(totalPullRequestsElement).toBeInTheDocument();
  });
});