
const carAmountsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DECREASE_AMOUNT':
      console.log('Reducing amount for', action.payload);
      return {
        ...state,
        [action.payload]: Math.max((state[action.payload] || 0) - 1, 0),
      };

    case 'INCREASE_AMOUNT':
      console.log('Increasing amount for', action.payload);
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };

    default:
      return state;
  }
};
  export default carAmountsReducer;
  