import React from "react";
import { View, StyleSheet } from "react-native";

export default function ListItemSeperator() {
  return <View style={styles.listItemSeperator}></View>;
}

const styles = StyleSheet.create({
  listItemSeperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
  },
});
