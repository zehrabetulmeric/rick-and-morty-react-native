import React from "react";
import axios from 'axios';
import { View, Text, StyleSheet, Image, Dimensions, } from "react-native";
import { useState, useEffect } from "react";
const device = Dimensions.get("window");

const CharacterDetailScreen = ({ route }) => {
    const { id } = route.params
    const [data, setData] = useState(
        {
            "created": "",
            "episode": [""],
            "gender": "",
            "id": 0,
            "image": undefined,
            "location": [{ "name": "", "url": "" }],
            "name": "",
            "origin": { "name": "", "url": "" },
            "species": "",
            "status": "",
            "type": "",
            "url": ""
        },
    )
    async function getCharacter() {
        try {
            const { data: responseData } = await axios.get('https://rickandmortyapi.com/api/character/' + `${id}`)
            setData(responseData);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCharacter()
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: data.image }}
                style={styles.image}
            />
            <Text style={styles.header}>{data.name}</Text>
            <Text style={styles.text}>{data.species}</Text>
            <Text style={styles.text}>{data.gender}</Text>
            <Text style={styles.text}>{data.status}</Text>
            <Text style={styles.text}>Location: {data.location.name}</Text>
            <Text style={styles.text}>Origin: {data.origin.name}</Text>
            <Image
                style={styles.footerImage}
                source={require("../images/footer.png")}
            />
        </View>
    );
};
export default CharacterDetailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#94A8B7",
        alignItems: "center"
    },
    image: {
        backgroundColor: 'white',
        width: device.width,
        height: device.height / 1.7,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color: "black",
        marginTop: 3,
        fontStyle: "italic"
    },
    footerImage: {
        marginTop:8
    }
})