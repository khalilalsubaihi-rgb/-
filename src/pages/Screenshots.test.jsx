import React from 'react';
import { render, screen } from '@testing-library/react';
import ScreenshotsPage from './Screenshots';

describe('ScreenshotsPage Component', () => {
  it('renders the screenshots page title', () => {
    render(<ScreenshotsPage />);
    const heading = screen.getByRole('heading', { name: /screenshots/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders a static array of screenshots', () => {
    render(<ScreenshotsPage />);

    // Check that we render exactly 2 screenshot items (based on our mock data in the component)
    const items = screen.getAllByTestId('screenshot-item');
    expect(items).toHaveLength(2);
  });

  it('renders screenshot details (title and description)', () => {
    render(<ScreenshotsPage />);

    // Check specific screenshot data
    expect(screen.getByRole('heading', { name: /dashboard overview/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/get a comprehensive view of your application's performance metrics/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /analytics/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/detailed analytics and reporting/i)).toBeInTheDocument();
  });
});