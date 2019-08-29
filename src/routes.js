import React from "react";
import { Platform, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Logo from "./utills/logo";

//SCREENS
import config from "./config/index";
import SignIn from "./components/auth";
import Artist from "./components/artists";
import Profile from "./components/profile/profile";
import Home from "./components/home/index";
import AboutArtist from "./components/artists/about";
import Upload from "./components/upload/index";
import Search from "./components/search/index";
import Article from "./components/home/article";
import EditProfile from "./components/profile/editProfile";

const headerConf = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#424242",
      fontSize: 20
    },
    headerTitle: Logo,
    headerTintColor: "white"
  }
};

const ArtistStack = createStackNavigator(
  {
    Artist: Artist,
    AboutArtist: AboutArtist
  },
  headerConf
);

const UploadStack = createStackNavigator(
  {
    Upload: Upload
  },
  headerConf
);

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  headerConf
);

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Article: {
      screen: Article,
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarVisible: true
      })
    }
  }
  // headerConf
);
const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    EditProfile: EditProfile
  },
  headerConf
);

const AppStack = createBottomTabNavigator(
  {
    // SignIn: SignIn,
    Home: HomeStack,
    Search: SearchStack,
    Upload: UploadStack,
    Artist: ArtistStack,
    Profile: ProfileStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#fff",
      activeBackgroundColor: "#BDBDBD",
      style: {
        backgroundColor: "#fff"
      }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Image
              source={config.images.homeIcon}
              resizeMode={"contain"}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === "Search") {
          return (
            <Image
              source={config.images.labelIcon}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === "Artist") {
          return (
            <Image
              source={config.images.djIcon}
              resizeMode={"contain"}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === "Upload") {
          return (
            <Image
              source={config.images.uploadIcon}
              style={{ width: 35, height: 35 }}
            />
          );
        } else {
          return (
            <Image
              source={config.images.menuIcon}
              style={{ width: 35, height: 35 }}
            />
          );
        }
      }
    })
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignIn
  },
  {
    headerMode: "none"
  }
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
        Artist: ArtistStack
      },
      {
        initialRouteName: "Auth"
      }
    )
  );
};
