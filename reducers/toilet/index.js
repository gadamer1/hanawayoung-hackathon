import {
  GET_TOILETS_REQUEST,
  GET_TOILETS_SUCCESS,
  GET_TOILETS_FAILURE,
  SET_CURRENT_TOILET
} from "./actions";

const initialState = {
  toilets: null,
  isGetToilets: false,
  error: null,
  toilet: null
};

const mocks = [
  {
    location: [37.48202003578588, 126.94944132673054],
    images: [],
    _id: "5e05aab58f28a32ea80e6958",
    name: "백광빌딩",
    description: "민간개방화장실",
    insertdate: 20100712,
    updatedate: 20100712,
    reviews: [],
    createdAt: "2019-12-27T06:54:45.098Z",
    updatedAt: "2019-12-27T06:54:45.098Z",
    __v: 0
  }
];

export default tolietReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOILETS_REQUEST: {
      return {
        ...state,
        isGetToilets: true
      };
    }

    case GET_TOILETS_SUCCESS: {
      return {
        ...state,
        toilets: action.data,
        isGetToilets: false
      };
    }
    case GET_TOILETS_FAILURE: {
      return {
        ...state,
        isGetToilets: false,
        error: action.error
      };
    }
    case SET_CURRENT_TOILET: {
      return {
        ...state,
        toilet: action.data
      };
    }

    default: {
      return { ...state };
    }
  }
};
