import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Testing <LoginPage /> component of useContext', () => {
  const user = { id: 123, name: 'Juan', email: 'juan@google.com' };

  test('should render component whithout user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser function on click button', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonTag = screen.getByRole('button');
    fireEvent.click(buttonTag);

    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
