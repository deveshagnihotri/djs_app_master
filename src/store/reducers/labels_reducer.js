import { GET_LABEL } from "../types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LABEL:
      return { ...state, labels: action.payload };
    default:
      return state;
  }
}
