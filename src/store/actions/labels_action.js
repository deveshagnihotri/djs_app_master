import { GET_LABEL } from "../types";
import axios from "axios";
import { FIREBASEURL } from "../../utills/misc";

export function getLabel() {
  const request = axios({
    method: "GET",
    url: `${FIREBASEURL}/teams.json`
  })
    .then(response => {
      const labels = [];

      for (let key in response.data) {
        labels.push({
          ...response.data[key],
          id: key
        });
      }
      return labels;
    })
    .catch(e => {
      return false;
    });

  return {
    type: GET_LABEL,
    payload: request
  };
}
