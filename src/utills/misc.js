import { AsyncStorage } from "react-native";

export const FIREBASEURL = `https://djapp-master.firebaseio.com`;
export const APIKEY = `AIzaSyBPtG1ELvTFq09AnXp6dhqlUTpCjvMMBzc`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

export const getTokens = cb => {
  AsyncStorage.multiGet([
    "@dj_app@token",
    "@dj_app@refreshToken",
    "@dj_app@expireToken",
    "@dj_app@uid"
  ]).then(value => {
    cb(value);
  });
};

export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ["@dj_app@token", values.token],
    ["@dj_app@refreshToken", values.refToken],
    ["@dj_app@expireToken", expiration.toString()],
    ["@dj_app@uid", values.uid]
  ]).then(response => {
    cb();
  });
};
