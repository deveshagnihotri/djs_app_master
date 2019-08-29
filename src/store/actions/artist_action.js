import { GET_ARTIST } from "../types";
import axios from "axios";
import { FIREBASEURL } from "../../utills/misc";

export function getArtist() {
  const request = axios({
    method: "GET",
    url: `${FIREBASEURL}/artist.json`
  })
    .then(response => {
      const artists = [];

      for (let key in response.data) {
        artists.push({
          ...response.data[key],
          id: key
        });
      }
      return artists;
    })
    .catch(e => {
      return false;
    });

  return {
    type: GET_ARTIST,
    payload: request
  };
}
