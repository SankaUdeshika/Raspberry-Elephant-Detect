import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, FlatList, Button } from "react-native";

const logoPath = require("../assets/images/Logo.png"); // Not used in this component but kept for reference

export default function History({ navigation }) {
  const [getImageArrayState, setImageArrayState] = useState([]);
  const [numColumns, setNumColumns] = useState(3); // Track the number of columns

  useEffect(() => {
    async function loadImage() {
      try {
        const response = await fetch(
          "http://192.168.8.129/ElephantDetector/loadImage.php"
        );
        if (response.ok) {
          const responseData = await response.json();
          setImageArrayState(responseData.imageArray || []);
        } else {
          Alert.alert("Error", "Failed to load images from the server.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred while fetching images.");
        console.error(error);
      }
    }

    loadImage();
  }, []);

  // Function to toggle number of columns
  const toggleColumns = () => {
    setNumColumns((prev) => (prev === 3 ? 2 : 3)); // Toggle between 3 and 2 columns
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        backgroundColor="black"
        networkActivityIndicatorVisible
      />
      <View style={styles.picturePreviewCover}>
        <View >
          <Text>Today History</Text>
        </View>
        <FlatList
          data={getImageArrayState}
          renderItem={({ item }) => (
            <View style={styles.picturePreview}>
              <Image
                source={"http://192.168.8.197/images/" + item}
                style={styles.hImages}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns} // Use dynamic number of columns
          key={numColumns} // Change key to force re-render when columns change
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <Button title="Toggle Columns" onPress={toggleColumns} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  picturePreviewCover: {
    display: "flex",
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    marginTop: 50,
  },
  picturePreview: {
    flex: 1,
    margin: 10, // Add margin between items
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  columnWrapper: {
    justifyContent: "space-around", // Optional: Align items with spacing between columns
  },
  hImages: {
    width: "100%",
    height: "100%",
  },
});
