import React from 'react';
import {View, Text, Button} from 'react-native';
import YouTube from '../node_modules/react-native-youtube/main';

export default function VideoScreen() {
    return (
        <View>
            <Text>Videos goes here!</Text>
            <YouTube
                apiKey=""
                videoId="KVZ-P-ZI6W4" // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
        </View>
    )
}

VideoScreen.navigationOptions = {
    title: 'Videos'
};