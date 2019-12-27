import { GET_CURRENT_LOCATION, SET_CURRENT_LOCATION } from "./actions";

const initialState = {
  user: null,
  location: null
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
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
