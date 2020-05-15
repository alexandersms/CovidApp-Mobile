import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../../config/constant/color";

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfo: FC<Props> = ({ status, value, color }) => {
  return (
    <View style={styles.subStats}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: color }}>
        {status}
      </Text>
      <Text style={styles.caseNumber}>{value}</Text>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  subStats: {
    marginVertical: 4,
  },
  caseNumber: {
    fontSize: 24,
    color: color.white,
  },
});
