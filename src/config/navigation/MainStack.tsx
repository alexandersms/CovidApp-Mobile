import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../containers/screens/MainScreen";
import CountryScreen from "../../containers/screens/CountryScreen";
import color from "../constant/color";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: color.black },
        headerTintColor: color.white,
      }}
    >
      <Stack.Screen
        name="Covid-19"
        component={MainScreen}
        options={{
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerLeft: () => (
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://img.icons8.com/doodle/50/000000/coronavirus.png",
              }}
            />
          ),

          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="ios-alert" size={35} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="FranceCase"
        component={CountryScreen}
        options={{
          title: "France",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
