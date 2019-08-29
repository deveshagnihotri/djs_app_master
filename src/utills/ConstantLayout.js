import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default (layout = {
  screenHeight: height,
  screenWidth: width,
  isSmallDevice: width < 375
});
