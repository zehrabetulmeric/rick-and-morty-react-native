import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import axios from 'axios';
import EpisodeCard from "../components/EpisodeCard";

const device = Dimensions.get("window");

const EpisodeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const getEpisodes = () => {
        setIsLoading(true);
        axios.get('https://rickandmortyapi.com/api/episode?page=' + `${currentPage}`)
            .then(res => {
                setData([...data, ...res.data.results]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getEpisodes();
    }, [currentPage]);

    const handlePress = id => {
        navigation.navigate('EpisodeDetail', { id });
    }
    const renderItem = ({ item }) => <EpisodeCard
        onPress={() => handlePress(item.id)}
        name={item.name}
        episode={item.episode}
    />
    const loader = () => {
        return (
            isLoading ?
                <View>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.headImage}
                source={require("../images/RickandMorty.png")}
            />
            <View style={styles.episodeContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={loader}
                    onEndReached={() => setCurrentPage(currentPage + 1)}
                    onEndReachedThreshold={0.5}
                />
            </View>
            <Image
                style={styles.footerImage}
                source={require("../images/episodeImage.png")}
            />
        </View>
    )
}
export default EpisodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#94A8B7",
        alignItems: "center"
    },
    episodeContainer: {
        width: "95%",
        height: device.height / 1.65,
    },
    headImage: {
        marginVertical: 30
    },
    footerImage: {
        position: "absolute",
        bottom: 0,
        height: 140,
        width: 250
    }
})