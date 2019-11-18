import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';

export default function VideoScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
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