import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../../src/09-useContext/routes';

describe('Testing <MainApp /> component whith Router', () => {
  test('should render the HomePage', () => {
    const router = createMemoryRouter(routes);

    render(<RouterProvider router={router} />);

    const headingTag = screen.getByRole('heading');
    expect(headingTag.innerHTML).toContain('HomePage');
  });

  test('should render the LoginPage', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/login'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
