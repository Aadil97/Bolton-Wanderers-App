import React from 'react';
import { WebView } from 'react-native-webview';
import { Button, View, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component {
    render(){
        return (
            <WebView
                source={{uri:"https://www.instagram.com/officialbwfc/?hl=en"}}
                renderLoading={this.renderLoading}
                startInLoadingState
            />
        )
    }
}

InstagramScreen.navigationOptions ={
    title: 'Instagram',
    headerTintColor: '#fff',
    headerStyle: {
    backgroundColor: '#273C80',
    }
};