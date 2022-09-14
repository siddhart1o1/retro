import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import colors from "../config/colors";
import { FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
const Listing = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
  {
    id: 4,
    title: "Red Jacket for sale",
    price: 100,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
  {
    id: 7,
    title: "Couch in great condition",
    price: 1000,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
  {
    id: 12,
    title: "Red Jacket for sale",
    price: 100,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
  {
    id: 23,
    title: "Couch in great condition",
    price: 1000,
    date: "3 days ago",
    image: require("../assets/back.webp"),
    location: "New York",
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.listingScreen}>
      <FlatList
        data={Listing}
        keyExtractor={(Listing) => Listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.ListindCards}
            title={item.title}
            price={"$" + item.price}
            image={item.image}
            date={item.date}
            location={item.location}
          ></Card>
        )}
        numColumns={2}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  listingScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
