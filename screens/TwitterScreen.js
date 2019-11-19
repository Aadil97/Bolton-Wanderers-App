import React from 'react';
import { WebView } from 'react-native-webview';
import { Button, View, StyleSheet } from 'react-native';

export default class TwitterScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
    headerTintColor: '#fff',
    headerStyle: {
    backgroundColor: '#273C80',
    }
};
    render(){
        return (
            <WebView
                source={{uri:"https://twitter.com/OfficialBWFC"}}
                renderLoading={this.renderLoading}
                startInLoadingState
            />
        )
    }
}