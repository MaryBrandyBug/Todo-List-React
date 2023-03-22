// eslint-disable-next-line import/prefer-default-export, default-param-last
export const noteInputReducer = (state = { inputText: '' }, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
};
