import { combineReducers } from "redux";
import User from "./user_reducer";
import News from "./home_reducer";
import Artist from "./artist_reducer";
import Label from "./labels_reducer";

const rootReducer = combineReducers({
  User,
  News,
  Artist,
  Label
});

export default rootReducer;
