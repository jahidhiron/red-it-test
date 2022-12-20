import {
  CHAR_LIST_SUCCESS,
  CHAR_DETAIL_SUCCESS,
} from "../actions/character-action-types";

const initialState = {
  char: null,
};

export default function char(state = initialState, { payload, type }) {
  switch (type) {
    case CHAR_LIST_SUCCESS: {
      return {
        ...state,
        char: payload.char,
      };
    }

    case CHAR_DETAIL_SUCCESS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
