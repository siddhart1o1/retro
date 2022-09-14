import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

function WelcomeScreen(props) {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.WelcomeScreen}>
        {/* <Image
          style={styles.ImageBack}
          source={require("../assets/back.webp")}
          blurRadius={20}
        ></Image> */}

        <View style={styles.WelcomeScreenTop}>
          <Text style={styles.LogoText}>Retro</Text>
          <Text style={styles.WelcomeDescriptionText}>
            One Stop to Sell used Stuff
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.ButtonStylesLogin}>
            <Text style={styles.ButtonTextLogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonStylesRegister}>
            <Text style={styles.ButtonTextRegister}>Reigister</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  WelcomeScreen: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ImageBack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  WelcomeScreenTop: {
    position: "absolute",
    top: 100,
  },

  LogoText: {
    fontSize: 100,
    color: colors.black,
    textAlign: "center",
    fontFamily: "Bold",
  },

  WelcomeDescriptionText: {
    fontSize: 20,
    color: colors.black,
    textAlign: "center",
    fontFamily: "Medium",
  },

  ButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    top: -20,
    fontFamily: "Medium",
  },

  ButtonStylesLogin: {
    width: "90%",
    top: -10,
    height: 70,
    backgroundColor: colors.black,
    justifyContent: "center",
    borderRadius: 50,
  },
  ButtonStylesRegister: {
    width: "90%",
    height: 70,
    backgroundColor: colors.white,
    justifyContent: "center",
    borderRadius: 50,
    borderColor: colors.black,
    borderWidth: 5,
  },
  ButtonTextLogin: {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "Bold",

    color: colors.white,
  },
  ButtonTextRegister: {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "Bold",

    color: colors.black,
  },
});
