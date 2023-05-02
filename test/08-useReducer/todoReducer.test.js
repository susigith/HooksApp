import { todoReducer } from '../../src/08-useReducer';

describe('Testing todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Hola, Mundo',
      done: false,
    },
  ];

  test('should return initial state', () => {
    const newState = todoReducer(initialState, {});

    expect(initialState).toBe(newState);
  });

  test('should add new TODO', () => {
    const action = {
      type: '[TODO Add Todo]',
      payload: { id: 2, description: 'New Todo', done: false },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a TODO', () => {
    const action = {
      type: '[TODO Remove Todo]',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('should Toggle a TODO', () => {
    const action = {
      type: '[TODO Toggle Todo]',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
