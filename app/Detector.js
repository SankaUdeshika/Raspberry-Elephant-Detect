import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

const logoPath = require("../assets/images/Logo.png");
const CamaraIconPath = require("../assets/images/camaraIcon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        backgroundColor="black"
        networkActivityIndicatorVisible
      />
      <View style={styles.picPreview}></View>
      {/* Raspberry IP address ->192.168.8.197 */}

      <Pressable
        onPress={async function () {
          const url = "http://192.168.8.197:5000/";
          try {
            const response = await fetch(url, { method: "GET" });

            if (response.ok) {
              // Ensure the response is not empty before parsing
              const text = await response.text();
              if (text) {
                Alert.alert("OK",text);
              } else {
                Alert.alert("Error", "Empty response from server");
              }
            } else {
              Alert.alert("Error", `Response not OK: ${response.status}`);
            }
          } catch (error) {
            console.error("Fetch error:", error);
            Alert.alert("Error", `Network error: ${error.message}`);
          }
        }}
      >
        <Image source={CamaraIconPath} />
      </Pressable>

      <View>
        <Text style={styles.CamaraText}>Capture the Photo</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  picPreview: {
    backgroundColor: "black",
    borderColor: "#90EE90",
    borderStyle: "solid",
    borderWidth: 3,
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  CamaraText: {
    marginTop: 20,
    color: "white",
  },
});
