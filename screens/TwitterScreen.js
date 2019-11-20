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
                source={{html:'<a class="twitter-timeline" href="https://twitter.com/OfficialBWFC?ref_src=twsrc%5Etfw">Tweets by OfficialBWFC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'}}
                renderLoading={this.renderLoading}
                startInLoadingState
                javaScriptEnabled={true}
            />
        )
    }
}