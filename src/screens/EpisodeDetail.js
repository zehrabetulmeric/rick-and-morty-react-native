import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';

const device = Dimensions.get("window");

const EpisodeDetail = ({ route, navigation }) => {
    const { id } = route.params;
    const [character, setCharacter] = useState([])
    const [episodeDetail, setEpisodeDetail] = useState([])
    const handlePress = id => {
        navigation.navigate('CharacterDetail', { id });
    }
    const getEpisodeDetails = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/episode' + `/${id}`)
            const episodeDetail = response.data
            setEpisodeDetail(episodeDetail)
            const characters = []
            for (var i = 0; i < episodeDetail.characters.length; i++) {
                var charactersUrlInEpisode = episodeDetail.characters[i]
                var charactersIdInUrl = charactersUrlInEpisode.slice(42, charactersUrlInEpisode.length)
                const character =
                    await getCharacters(charactersIdInUrl)
                characters.push(character)
            }
            setCharacter(characters)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getEpisodeDetails()
    }, [])
    async function getCharacters(id) {
        try {
            const { data: characterDetail } = await axios.get('https://rickandmortyapi.com/api/character' + `/${id}`)
            return characterDetail;
        } catch (error) {
            console.log(error)
        }
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => handlePress(item.id)}>
                <View style={styles.characterContainer}>
                    <Image
                        style={styles.characterImage}
                        source={{ uri: item.image }}
                    />
                    <Text style={styles.characterName}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.detailImage}
                source={require("../images/rick-and-morty-detail.png")}
            />
            <Text style={styles.name}>{episodeDetail.name}</Text>
            <Text style={styles.episode}>{episodeDetail.episode}</Text>
            <Text style={styles.airdate}>Air Date: {episodeDetail.air_date}</Text>
            <Text style={styles.header}>Characters</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    horizontal={true}
                    data={character}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#94A8B7",
        alignItems: "center"
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    characterContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    characterImage: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginHorizontal: 10,
        borderRadius: 50
    },
    characterName: {
        fontSize: 14,
        color: "black",
        marginTop: 2,
        fontWeight: "bold"
    },
    detailImage: {
        width: device.width,
        height: device.height / 1.7,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    name: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
        color: "black",
        fontWeight: "bold"
    },
    episode: {
        fontSize: 14,
        textAlign: "center",
        color: "black",
        marginTop: 2,
    },
    airdate: {
        marginTop: 2,
        color: "black",
        fontStyle: "italic"
    },
    header: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        marginVertical: 10
    }

})

export default EpisodeDetail;


