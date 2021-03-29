export const loginReducer = (state, action) => {
  switch (action.type) {
    // watch onChanged state
    case 'field': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'login': {
      return { ...state, isLoading: true, message: '' };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        isLoading: false,
        message: 'Incorrect username or password',
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        email: '',
        password: '',
      };
    }
    case 'authError': {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        message: 'you have to get a authentication.',
      };
    }
    default:
      break;
  }
  return state;
};
