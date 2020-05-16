import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import RootNavigation from "./src/config/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    /*
    paddingLeft: 20,
    paddingRight: 20,
    */
  },
});
