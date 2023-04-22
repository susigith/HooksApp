export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC pendiente de implementar');

    default:
      return initialState;
  }
};
