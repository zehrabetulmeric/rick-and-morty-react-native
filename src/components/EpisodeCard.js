import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

const EpisodeCard = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          source={require("../images/episode-img.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.episode}>{props.episode}</Text>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Image
          style={styles.nextIcon}
          source={require("../images/next.png")}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 25,
    alignItems: "center",
    marginBottom: 15
  },
  textContainer: {
    marginLeft: 25,
    height: 75,
    justifyContent: "space-evenly",
    width: '50%'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 22,
  },
  nextIcon: {
    width: 25,
    height: 38,
    position: "absolute",
    right: 25
  },
  episode: {
    fontSize: 16,
    color: "black"
  },
  name: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  }
})

export default EpisodeCard;