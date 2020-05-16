import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CountryScreen from "../../containers/screens/CountryScreen";
import MapScreen from "../../containers/screens/MapScreen";
import MainStack from "./MainStack";
import color from "../constant/color";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: color.blackLight,
          },
          activeTintColor: color.white,
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-apps" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Carte"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-map" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pays"
          component={CountryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-globe" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
