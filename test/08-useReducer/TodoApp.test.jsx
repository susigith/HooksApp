import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Testing <TodoApp /> component', () => {
  test('should display component correctly', () => {
    useTodo.mockReturnValue({
      todos: [
        { id: 1, description: 'Tarea #1', done: false },
        { id: 2, description: 'Tarea #2', done: true },
      ],
      todosCount: 2,
      pendingTodosCount: 1,
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      handleNewTodo: jest.fn(),
    });

    render(<TodoApp />);

    expect(screen.getByText('Tarea #1')).toBeTruthy();
    expect(screen.getByText('Tarea #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

    //Estas dos pruebas me las invente yo
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'TodoApp: 2'
    );
    expect(screen.getByLabelText('small').innerHTML).toContain('pendientes: 1');
  });
});
