import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={styles.ImageContainer}>
      <View style={styles.CloseIcon}></View>
      <View style={styles.DeleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/product.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  CloseIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  DeleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
