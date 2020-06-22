import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import StoryBook from "./storybook";
import { setCustomText } from "react-native-global-props";

const Stack = createStackNavigator();




const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: "",
  },
};

setCustomText(customTextProps);

export default function App(props) {
  
  return <StoryBook />;
}
