import React from "react";
import { TabNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import HotRepoScreen from "../Containers/HotRepoScreen";
import SearchRepoNavigation from "./SearchRepoNavigation";
import styles from "./Styles/NavigationStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

// Manifest of possible screens
const PrimaryNav = TabNavigator(
  {
    LaunchScreen: { screen: SearchRepoNavigation },
    HotRepoScreen: { screen: HotRepoScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "LaunchScreen") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "HotRepoScreen") {
          iconName = `ios-flame${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default PrimaryNav;
