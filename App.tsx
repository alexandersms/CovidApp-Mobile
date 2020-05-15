import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import RootNavigation from "./src/config/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
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
