import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#f3f3f3",
    height: 220,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10
  },
  displayText: {
    fontSize: 46,
    color: "#999"
  }
});

export default Display;
