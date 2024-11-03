import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View, StatusBar, Alert } from "react-native";

// Variables
const logoPath = require("../assets/images/Logo.png");

export default function App() {
  useEffect(() => {
    setTimeout(changeLoadingPage, 1500);
  });

  function changeLoadingPage() {
    router.replace("/home");
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden backgroundColor="black" barStyle="dark-content" animated />
      <View style={styles.body}>
        {/* Image */}
        <Image source={logoPath} style={styles.LOGO} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  LOGO: {
    width: 150,
    height: 150,
  },
});
