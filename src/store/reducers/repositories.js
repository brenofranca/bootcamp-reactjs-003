const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_REPOSITORY_REQUEST':
      return { ...state, loading: true, error: null };
    case 'ADD_REPOSITORY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case 'UPDATE_REPOSITORY_REQUEST':
      return { ...state };
    case 'UPDATE_REPOSITORY_SUCCESS':
      return {
        ...state,
        error: null,
        data: [
          ...state.data.map(item => (item.id === action.payload.data.id ? { ...item, ...action.payload.data } : { ...item })),
        ],
      };
    case 'REMOVE_REPOSITORY':
      return { ...state, data: state.data.filter(item => item.id !== action.payload.id) };
    case 'ADD_OR_UPDATE_REPOSITORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
