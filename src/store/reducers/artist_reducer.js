import { GET_ARTIST } from "../types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ARTIST:
      return { ...state, artists: action.payload };
    default:
      return state;
  }
}
