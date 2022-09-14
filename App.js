import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetals from "./app/screens/ListingDetals";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <ListingScreen></ListingScreen>

    // <Screen>
    //   <ListItem
    //     title="My title"
    //     desc="My description"

    //     ImageComponent={
    //       <Icon
    //         name="email"
    //         size={50}
    //         backgroundColor={colors.primary}
    //         iconColor={colors.white}
    //       />
    //     }
    //   ></ListItem>
    // </Screen>
    // // <WelcomeScreen></WelcomeScreen>
    // <View
    //   style={{
    //     paddingTop: 100,
    //     flex: 1,
    //     padding: 20,
    //     backgroundColor: "white",
    //   }}
    // >
      // <Card
      //   title="WelcomeScreen"
      //   price="$100"
      //   image={require("./app/assets/product.jpg")}
      // ></Card>
    // </View>
  );
}
