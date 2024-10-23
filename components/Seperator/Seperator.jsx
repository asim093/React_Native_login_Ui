import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Seperator = ({ text, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { backgroundColor: color }]} />
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"80%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  text: {
    marginHorizontal: 10,
    color: "black",
  },
});

export default Seperator;
