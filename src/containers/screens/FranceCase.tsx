import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList, View, StyleSheet } from "react-native";
import axios from "axios";
import api from "../../config/constant/api";
import color from "../../config/constant/color";

interface FranceCaseState {
  provinceState: string;
  confirmed: number;
  recovered: number;
  deaths: number;
}

const FranceCase = () => {
  const [data, setData] = useState<FranceCaseState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.apiID);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.dptCard}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
          {item.provinceState === null
            ? "France Metropolitaine"
            : item.provinceState}
        </Text>
        <View style={styles.case}>
          <Text
            style={{
              flex: 1,
              backgroundColor: color.redC,
              color: color.white,
              padding: 4,
              fontWeight: "bold",
            }}
          >
            Confirmés : {item.confirmed}
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: color.greenG,
              color: color.white,
              padding: 4,
              fontWeight: "bold",
            }}
          >
            Guérisons : {item.recovered}
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: color.purpleD,
              color: color.white,
              padding: 4,
              fontWeight: "bold",
            }}
          >
            Décès : {item.deaths}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dptCard: {
    backgroundColor: color.white,
    margin: 8,
    padding: 10,
    borderRadius: 4,
  },
  case: {
    flexDirection: "row",
  },
  caseText: {
    flex: 1,
  },
});

export default FranceCase;
