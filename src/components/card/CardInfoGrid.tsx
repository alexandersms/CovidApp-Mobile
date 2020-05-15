import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../../config/constant/color";

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfoGrid: FC<Props> = ({ status, value, color }) => {
  return (
    <View
      style={{
        marginVertical: 4,
        flex: 1,
        backgroundColor: color,
        borderRadius: 6,
        padding: 10,
        margin: 4,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
        {status}
      </Text>
      <View style={{ height: 1, backgroundColor: "black" }} />
      <Text style={styles.caseNumber}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caseNumber: {
    fontSize: 24,
    color: color.white,
    fontWeight: "bold",
  },
});

export default CardInfoGrid;
