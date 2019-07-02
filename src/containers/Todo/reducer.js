import { ADD, TOGGLE, REMOVE } from './actions';

const init = [];

const reducer = (state = init, action) => {
  switch (action.type) {
    case ADD: {
      const newTodo = {
        id: new Date().getTime(),
        completed: false,
        text: action.item
      };
      return [...state, newTodo];
    }
    case TOGGLE: {
      const target = state.findIndex(item => item.id === action.id);
      state[target].completed = !state[target].completed;
      return [...state];
    }
    case REMOVE: {
      const newState = state.filter(item => item.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
