import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
export default function Screen(props) {
  return <SafeAreaView style={styles.screens}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screens: {
    paddingTop: Constants.statusBarHeight,
  },
});
