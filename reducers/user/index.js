import {
  GET_CURRENT_LOCATION,
  SET_CURRENT_LOCATION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "./actions";

const initialState = {
  user: null,
  location: null,
  isLoging: false,
  isSignUping: false,
  isLoginSuccess: false,
  isLoginFailure: null,
  isSignUpSuccess: false
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoging: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isLoging: false,
        isLoginSuccess: action.data.success,
        isLoginFailure: !action.data.success
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoging: false,
        error: action.error
      };
    }

    //회원가입
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSignUping: true
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isSignUping: false,
        isSignUpSuccess: true
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSignUping: false,
        error: action.error
      };
    }

    case GET_CURRENT_LOCATION: {
      return {
        ...state,
        location: {
          longitude: action.data.coords.longitude,
          latitude: action.data.coords.latitude
        }
      };
    }

    case SET_CURRENT_LOCATION: {
      return {
        ...state,
        location: action.data
      };
    }
    default: {
      return { ...state };
    }
  }
};
