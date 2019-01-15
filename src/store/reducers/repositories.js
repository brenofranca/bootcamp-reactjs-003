const INITIAL_STATE = [];

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_REPOSITORY_SUCCESS':
      return [...state, action.payload.data];
    case 'UPDATE_REPOSITORY_SUCCESS':
      return [
        ...state.map(item => (item.id === action.payload.data.id ? { ...item, ...action.payload.data } : { ...item })),
      ];
    case 'REMOVE_REPOSITORY':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}
