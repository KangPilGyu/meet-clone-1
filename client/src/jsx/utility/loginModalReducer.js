export const loginModalReducer = (state, action) => {
  switch (action.type) {
    case 'open': {
      return {
        modal: true,
      };
    }
    case 'close': {
      return {
        modal: false,
      };
    }
  }
  return state;
};
