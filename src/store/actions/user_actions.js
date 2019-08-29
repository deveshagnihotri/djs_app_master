import axios from "axios";
import { SIGN_UP, SIGN_IN } from "../types";
import {
  SIGNUP,
  SIGNIN,
  AUTO_SIGN_IN,
  FIREBASEURL,
  REFRESH
} from "../../utills/misc";

export function signUp(data) {
  const request = axios({
    method: "POST",
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });

  return {
    type: SIGN_UP,
    payload: request
  };
}

export function signIn(data) {
  const request = axios({
    method: "POST",
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });

  return {
    type: SIGN_IN,
    payload: request
    // email: "devesh524@gmail.com",
    // token: "skffddgdgrggrg"
  };
}

export const autoSignIn = refToken => {
  const request = axios({
    method: "POST",
    url: REFRESH,
    data: "grant_type=refresh_token&refresh_token=" + refToken,
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });
  return {
    type: AUTO_SIGN_IN,
    payload: request
  };
};
