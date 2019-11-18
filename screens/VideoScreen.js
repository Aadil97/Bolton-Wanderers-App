import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

export default class VideoScreen extends Component {
    static navigationOptions = {
        title: 'Videos',
        headerTintColor: '#fff',
        headerStyle: {
        backgroundColor: '#273C80',
        }
    };
    render(){
        return (
            <WebView 
                source = {{ uri: "https://www.youtube.com/user/OfficialBWFC/videos"}}
            />
    );
    }
}