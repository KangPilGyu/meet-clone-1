export const positionReducer = (state, action) => {
  switch (action.type) {
    case 'scroll': {
      return {
        position: window.scrollY,
      };
    }
  }
  return state;
};
