import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "../config/fonts";

export default function Card({ title, price, image, date, location }) {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardDetails}>
        <Text numberOfLines={1} style={styles.cardTitle}>
          {title}
        </Text>
        <View style={styles.PriceContainer}>
          <Text numberOfLines={1} style={styles.price}>
            {price}
          </Text>
        </View>
        <View style={styles.DateAndLocation}>
          <Text numberOfLines={1} style={styles.location}>
            {location}
          </Text>
          <Text numberOfLines={1} style={styles.date}>
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
    flex: 1,
    width: "50%",
    elevation: 7,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardDetails: {
    padding: 10,
    fontFamily: "FMedium",
  },
  cardTitle: {
    marginBottom: 7,
    flexShrink: 1,
    fontSize: 17,
    fontFamily: "FMedium",
  },
  price: {
    color: colors.secondary,
    fontSize: 17,
    fontFamily: "FBold",
    marginBottom: 5,
  },
  DateAndLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  date: {
    color: colors.secondary,
    fontSize: 11,
    paddingTop: 2,
    fontFamily: "FMedium",
  },
  location: {
    color: colors.secondary,
    fontSize: 11,
    paddingTop: 2,
    fontFamily: "FMedium",
  },
});
