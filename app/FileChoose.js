import React, { useState } from "react";
import { View, Text, Pressable, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function FileChoose({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [statusMessage, setStatusMessage] = useState("Press the Camera Button");

  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setStatusMessage("Image Selected!");
    } else {
      setStatusMessage("No Image Selected");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "lightgreen", fontSize: 20 }}>{statusMessage}</Text>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.selectedImage} />
      )}

      {/* Camera Button */}
      <Pressable >
        <Image source={require("../assets/images/send.png")} style={styles.CamaraIcon} />
      </Pressable>

      <Text style={styles.CamaraText}>Choose an Image From Gallery {imageUri}</Text>

      {/* Choose File Button */}
      <Pressable style={styles.GoHistory} onPress={pickImage}>
        <Text style={styles.gohistoryText}>Choose a File</Text>
      </Pressable>
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
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  CamaraText: {
    marginTop: 20,
    color: "white",
  },
  CamaraIcon: {
    width: 100,
    height: 100,
  },
  gohistoryText: {
    color: "white",
  },
  GoHistory: {
    padding: 10,
    backgroundColor: "green",
    marginTop: 20,
    borderRadius: 10,
  },
});
