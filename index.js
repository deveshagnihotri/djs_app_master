/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

import reducers from "./src/store/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancer(applyMiddleware(promiseMiddleware))
);

const appRedux = () => (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
