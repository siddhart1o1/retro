import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import AppLoading from "expo-app-loading";
import fonts from "../config/fonts";
import { useFonts } from "expo-font";
import ListItemSeperator from "../components/ListItemSeperator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function AccountScreen() {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={styles.accountScreenContainer}>
      <View style={styles.topDetailsContainer}>
        <Image
          style={styles.accountScreenImage}
          source={require("../assets/back.webp")}
        ></Image>
        <Text style={styles.username}>Hi Siddharth</Text>
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons
            name="email"
            color="red"
            size={25}
          ></MaterialCommunityIcons>
          <Text style={styles.email}>siddharthtiwari@gmail.com</Text>
        </View>
        <View style={styles.locaionContainer}>
          <Entypo name="location-pin" color="green" size={25}></Entypo>
          <Text style={styles.location}>India</Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#ccc",
          top: -20,
        }}
      ></View>
      <View style={styles.MiddleConatiner}>
        <View style={styles.DetailBox}>
          <Text style={styles.BoxHeading}>My Listing</Text>
          <Text style={styles.BoxValue}> 32</Text>
        </View>
        <View style={styles.DetailBox}>
          <Text style={styles.BoxHeading}>New Messages</Text>
          <Text style={styles.BoxValue}>02</Text>
        </View>
      </View>

      {/* <View style={styles.Logout}>
        <Text style={styles.LogoutText}>Logout</Text>
      </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountScreenContainer: {
    backgroundColor: colors.white,
  },
  topDetailsContainer: {
    backgroundColor: colors.white,
    width: "100%",
    padding: 30,
  },
  accountScreenImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  username: {
    fontSize: 40,
    marginTop: 15,
    fontFamily: "FBold",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locaionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  email: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "FMedium",
  },
  location: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "FMedium",
  },

  MiddleConatiner: {
    width: "100%",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    top: -30,
  },
  DetailBox: {
    backgroundColor: colors.secondary,
    width: "48%",
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  BoxHeading: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "FMedium",
  },
  BoxValue: {
    color: colors.white,
    fontSize: 40,
    fontFamily: "FBold",
  },

  Logout: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  LogoutText: {
    width: "80%",
    backgroundColor: colors.secondary,
    color: colors.white,
    fontSize: 20,
    fontFamily: "FBold",
    padding: 20,
    textAlign: "center",
    borderRadius: 50,
  },
});
