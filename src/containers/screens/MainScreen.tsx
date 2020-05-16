import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import color from "../../config/constant/color";
import CardGlobal from "../organism/main/CardGlobal";
import CardCountry from "../organism/main/CardCountry";

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardGlobal />
      <CardCountry />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});

export default MainScreen;
