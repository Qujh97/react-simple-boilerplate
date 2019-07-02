import { CHANGE } from './actions';

const init = 'all';

const reducer = (state = init, action) => {
  switch (action.type) {
    case CHANGE: {
      return action.status;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
