import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import RepoResultScreen from "../Containers/RepoResultScreen";
import styles from "./Styles/NavigationStyles";

const SearchRepoNavigation = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    RepoResultScreen: { screen: RepoResultScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    },
    tabBarOptions: {
      style: {
        backgroundColor: "red"
      }
    }
  }
);

export default SearchRepoNavigation;
