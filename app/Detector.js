import { Image } from "expo-image";

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

const logoPath = require("../assets/images/Logo.png");
const CamaraIconPath = "../assets/images/camaraIcon.png";


export default function Detector() {
  {
    /* Raspberry IP address ->192.168.8.197 */
  }
  const [getImagePath, setIamgePath] = useState(
    "photo_86750fb1-2997-4c72-9474-723b0b9aa0b4.jpg"
  );
  const imageUrl = ``;
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        backgroundColor="black"
        networkActivityIndicatorVisible
      />
      <View style={styles.picPreview}>
        <Image
          source={"http://192.168.8.197/images/" + getImagePath}
          width={300}
          height={300}
        />
      </View>

      <Pressable
        onPress={async function () {
          const capturePhoto_url = "http://192.168.8.197:5000/capture_photo";
          const getImagePath_url = "http://192.168.8.197:5000/get_image";

          try {
            const response = await fetch(capturePhoto_url, { method: "GET" });

            if (response.ok) {
              // Ensure the response is not empty before parsing
              const text = await response.text();

              var imagearray = text.split("images/");
              var splitImageandBoolean = imagearray[1].split(" ");
              var imageName = splitImageandBoolean[0];
              var imageboolean = splitImageandBoolean[1];
              var date = splitImageandBoolean[2];
              var time = splitImageandBoolean[3];

              if (imageboolean == "true") {
                setIamgePath(imageName);

                var form = new FormData();
                form.append("imageBoolean",imageboolean);
                form.append("date",date);
                form.append("time",time);
                form.append("imagename",imageName);

                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                  if (request.readyState == 4 && request.status == 200) {
                    var responseText = request.responseText;
                    alert(responseText);
                  }
                };
                request.open("POST", "http://192.168.8.125/ElephantDetector/process.php", true);
                request.send(form);

              } else {
                Alert.alert("No Elephant Detections");
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
        <Image
          source={require("../assets/images/camaraIcon.png")}
          style={styles.CamaraIcon}
        />
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
  CamaraIcon: {
    width: 100,
    height: 100,
  },
});
