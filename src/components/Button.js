import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Button = ({ onPress, text }) => {

    return (

        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <Text
                style={styles.text}>
                {text}
            </Text>
            <Image
                style={styles.nextIcon}
                source={require("../images/next.png")}
            />
        </TouchableOpacity>


    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        width: '35%',
        height: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 50,
        borderWidth: 1.6,
        borderColor: 'black',
        alignItems: "center"
    },

    text: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 16
    },

    nextIcon: {
        width: 20,
        height: 20
    }


})