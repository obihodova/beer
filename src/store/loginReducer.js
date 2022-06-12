const defaultState = {
  isLogin: true,
};

const LOGIN_TRUE = "LOGIN_TRUE";
const LOGIN_FALSE = "LOGIN_FALSE";

export const loginReduser = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_TRUE:
      return { ...state, isLogin: true };
    case LOGIN_FALSE:
      return { ...state, isLogin: false };

    default:
      return state;
  }
};

export const loginTrue = () => ({ type: LOGIN_TRUE });
export const loginFalse = () => ({ type: LOGIN_FALSE });
