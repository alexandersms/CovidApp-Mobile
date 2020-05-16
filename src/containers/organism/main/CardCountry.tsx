import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CardInfoGrid from "../../../components/card/CardInfoGrid";
import color from "../../../config/constant/color";
import axios from "axios";
import api from "../../../config/constant/api";
import { useNavigation } from "@react-navigation/native";

interface CardStatus {
  value: number;
  detail: string;
}

interface CardCountryState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
  lastUpdate: string;
}

const CardCountry = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<CardCountryState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.apiCountry);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.stats}>
      <Text style={styles.CountryTitle}>France</Text>

      <View style={styles.caseCountry}>
        {data && (
          <>
            <CardInfoGrid
              color={color.redC}
              status="Confirmés"
              value={data.confirmed.value.toLocaleString()}
            />
            {console.log(`La data ${data.confirmed.value}`)}
            <CardInfoGrid
              color={color.greenG}
              status="Guérisons"
              value={data.recovered.value.toLocaleString()}
            />
            <CardInfoGrid
              color={color.purpleD}
              status="Décès"
              value={data.deaths.value.toLocaleString()}
            />
          </>
        )}
      </View>

      <Button
        onPress={() => navigation.navigate("FranceCase")}
        title="Détails"
        color={color.greenG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    backgroundColor: color.blackLight,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  caseCountry: {
    flexDirection: "row",
    marginBottom: 10,
  },
  CountryTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    color: color.white,
  },
});

export default CardCountry;
