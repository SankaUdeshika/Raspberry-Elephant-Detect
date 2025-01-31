import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

import { useEffect } from "react";
import { StyleSheet, View,  Alert } from "react-native";

// Variables
const logoPath = require("../assets/images/Logo.png");

export default function Index({navigation}) {
  useEffect(() => {
    setTimeout(changeLoadingPage, 1500);
  });

  function changeLoadingPage() {
    // router.replace("/Detector");
    navigation.navigate('Detector')
  }

  return (
    <View style={styles.container}>
      <StatusBar  style="light" />
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
