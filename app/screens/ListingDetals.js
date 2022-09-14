import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "../config/fonts";

export default function ListingDetals() {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Image
          style={styles.image}
          source={require("../assets/back.webp")}
        ></Image>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Phone for sale</Text>

          <View style={styles.subDetailsContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$100</Text>
            </View>
            <Text style={styles.Date}> 3 days ago</Text>
          </View>
          <View>
            <Text style={styles.descriptionHeading}> Description</Text>
            <Text style={styles.Descriptions}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              dolores doloremque consectetur dicta fuga, corrupti facilis
              reprehenderit laborum debitis, nisi magnam omnis accusamus quis?
              Voluptas repellat minus nihil velit qui?
            </Text>
          </View>
        </View>

        <View style={styles.sellerDetails}>
          <Text style={styles.SoldBy}>Seller Details</Text>
          <Text style={styles.sellerName}>Seller Name</Text>
          <Text style={styles.sellerLocation}>Seller Location</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: "FBold",
    fontWeight: "500",
  },
  subDetailsContainer: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 15,

  },
  priceContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#252422",
    elevation: 1,
    borderWidth: 1,
    borderColor: "#252422",
  },

  price: {
    color: "white",
    fontFamily: "FBold",
    fontSize: 30,
  },
  Date: {
    color: "#6e6969",
    fontFamily: "FMedium",
  },
  descriptionHeading: {
    fontSize: 25,
    fontFamily: "FBold",
    paddingBottom: 10,
  },
  Descriptions: {
    fontSize: 18,
    fontFamily: "FMedium",
  },

  sellerDetails: {
    padding: 20,

    backgroundColor: "#252422",
    marginVertical: 20,
  },
  SoldBy: {
    color: "white",
    fontSize: 15,
    fontFamily: "FMedium",
    paddingBottom: 4,
  },

  sellerName: {
    fontSize: 25,
    fontFamily: "FBold",
    color: "white",
    paddingBottom: 4,
  },
  sellerLocation: {
    color: "#e5e5e5",
    fontFamily: "FMedium",
    fontSize: 15,
  },
});
