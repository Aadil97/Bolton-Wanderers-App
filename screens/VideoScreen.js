import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

export default class VideoScreen extends Component {
    render(){
        return (
            <WebView 
                source = {{ uri: "https://www.youtube.com/user/OfficialBWFC/videos"}}
            />
    );
    }
}

VideoScreen.navigationOptions = {
    title: 'Videos',
    headerTintColor: "blue",
};