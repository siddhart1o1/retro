import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  image,
  title,
  desc,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#40e0d0" onPress={onPress}>
        <View style={styles.listItemContainer}>
          <View style={styles.imageAndTitleContainer}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.titleAndDescriptionContainer}>
              <Text style={styles.title}>{title}</Text>
              {desc && <Text style={styles.description}>{desc}</Text>}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: colors.white,
    marginVertical: 2,
    padding: 15,
  },
  imageAndTitleContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  titleAndDescriptionContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },

  description: {
    color: colors.medium,
  },
});
