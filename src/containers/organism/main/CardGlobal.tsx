import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import color from "../../../config/constant/color";
import CardInfo from "../../../components/card/CardInfo";
import axios from "axios";
import api from "../../../config/constant/api";

interface CardStatus {
  value: number;
  detail: string;
}

interface CardGlobalState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
}

const CardGlobal = () => {
  const [data, setData] = useState<CardGlobalState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.api);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 24,
          fontWeight: "bold",
          color: color.white,
        }}
      >
        Global
      </Text>
      <View style={styles.stats}>
        {data && (
          <>
            <CardInfo
              color={color.redC}
              status="Confirmés"
              value={data.confirmed.value}
            />
            {console.log(`La data ${data.confirmed.value}`)}
            <CardInfo
              color={color.greenG}
              status="Guérisons"
              value={data.recovered.value}
            />
            <CardInfo
              color={color.purpleD}
              status="Décès"
              value={data.deaths.value}
            />
          </>
        )}
      </View>
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

export default CardGlobal;
