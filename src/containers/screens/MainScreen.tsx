import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import color from "../../config/constant/color";
import CardInfo from "../../components/card/CardInfo";
import CardInfoGrid from "../../components/card/CardInfoGrid";

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconButton}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://img.icons8.com/doodle/50/000000/coronavirus.png",
          }}
        />
        <Button
          onPress={() => console.log("Hello Alex")}
          title="Valider"
          color={color.greenG}
        />
      </View>
      <View style={styles.stats}>
        <CardInfo color={color.redC} status="Confirmés" value="1234" />
        <CardInfo color={color.greenG} status="Guérisons" value="1234" />
        <CardInfo color={color.purpleD} status="Décès" value="1234" />
      </View>

      <View style={styles.stats}>
        <Text style={styles.CountryTitle}>France</Text>

        <View style={styles.caseCountry}>
          <CardInfoGrid color={color.redC} status="Confirmés" value="1234" />
          <CardInfoGrid color={color.greenG} status="Guérisons" value="1234" />
          <CardInfoGrid color={color.purpleD} status="Décès" value="1234" />
        </View>
        <Text style={styles.subTitle}>
          Dernière mise à jour : 15-05-2020:00:00:00
        </Text>
        <Button
          onPress={() => console.log("Details")}
          title="Détails"
          color={color.greenG}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  stats: {
    backgroundColor: color.blackLight,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  iconButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  caseCountry: {
    flexDirection: "row",
  },
  CountryTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  subTitle: {
    marginVertical: 10,
    textAlign: "right",
    color: color.white,
  },
});

export default MainScreen;
