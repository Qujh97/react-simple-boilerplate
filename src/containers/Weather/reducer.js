import { STARTED, SUCCESS, FAILURE } from './actions';

const init = {
  loading: false,
  error: undefined
};

function reducer(state = init, action) {
  switch (action.type) {
    case STARTED: {
      return { ...state, loading: true };
    }
    case SUCCESS: {
      return { ...state, loading: false, error: undefined, result: action.result };
    }
    case FAILURE: {
      return { ...state, loading: false, error: action.result };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
