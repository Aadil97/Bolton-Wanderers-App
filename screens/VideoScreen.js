import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Video
                source={require('../assets/video/HIGHLIGHTS.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls
                style={styles.video}
            />
            </View>
            <Text style={styles.videoTitle}>HIGHLIGHTS | Bolton Wanderers 2-1 Fleetwood Town</Text>
        </ScrollView>
    )
}

VideoScreen.navigationOptions = {
    title: 'Videos',
};

const styles = StyleSheet.create({
    video: {
        width: 500,
        height: 300,
        padding: 15,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CDCDCD',
        padding: 20,
    },
    videoTitle : {
        padding: 10,
        backgroundColor: '#273C7F',
        color: '#fff'
    }
})