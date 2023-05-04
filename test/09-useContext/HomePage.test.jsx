import { getByLabelText, render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Testing <HomePage /> component of useContext', () => {
  const user = {
    id: 123,
    name: 'Juan',
    email: 'juan@google.com',
  };

  test('should not to render user in component', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    expect(screen.getByLabelText('pre').innerHTML).toBe(' null ');
  });

  test('should to render a user in component', () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );

    // Mi solucion
    // expect(screen.getByLabelText('pre').innerHTML).toContain(
    //   JSON.stringify(user, null, 2)
    // );

    // Una mejor
    const preTag = screen.getByLabelText('pre').innerHTML;
    expect(JSON.parse(preTag)).toEqual(user);
  });
});
