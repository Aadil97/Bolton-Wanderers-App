import React from 'react';
import {View, Text, Button} from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen() {
    return (
        <View>
            <Text>Videos go here!</Text>
            <Video
                source={require('../assets/video/HIGHLIGHTS.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls
                style={{ width: 300, height: 300 }}
            />

        </View>
    )
}

VideoScreen.navigationOptions = {
    title: 'Videos',
};