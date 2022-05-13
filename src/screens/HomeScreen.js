import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import Button from "../components/Button";

const device = Dimensions.get("window");

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require("../images/rick-and-morty.jpg")}
      />
      <Text style={styles.header}>Rick and Morty</Text>
      <Button
        text="Episodes"
        onPress={() => navigation.navigate('EpisodeScreen')}
      />
      <Text style={styles.text}>Rick and Morty is an American adult animated science fiction sitcom created
        by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.
        The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted,
        but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
      </Text>
      <Image
        style={styles.footerImage}
        source={require("../images/pickleRick.png")}
      />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94A8B7",
    alignItems: "center"
  },
  mainImage: {
    width: device.width,
    height: device.height / 1.7,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  textImage: {
    width: 252,
    height: 67,
    position: "absolute",
    backgroundColor: "red",
    bottom: 15,
    right: 15,
  },
  header: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10,
    color: "black",
    fontWeight: "bold"
  },
  text: {
    color: "black",
    fontSize: 13,
    marginTop: 10,
    paddingHorizontal: 10
  },
  footerImage: {
    position: "absolute",
    bottom: 0
  }


})