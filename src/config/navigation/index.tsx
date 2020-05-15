import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../../containers/screens/MainScreen";
import CountryScreen from "../../containers/screens/CountryScreen";
import MapScreen from "../../containers/screens/MapScreen";

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Carte" component={MapScreen} />
        <Tab.Screen name="Pays" component={CountryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
