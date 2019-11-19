import React from 'react';
import { WebView } from 'react-native-webview';
import { Button, View, StyleSheet } from 'react-native';

export default class FacebookScreen extends React.Component {
    render(){
        return (
          <View style={{flex: 1}}>
            <WebView
                source={{uri:"https://www.facebook.com/officialbwfc/"}}
                renderLoading={this.renderLoading}
                startInLoadingState
                style={{flex: 1}}
            />
            </View>
        )
    }
}

FacebookScreen.navigationOptions = {
  title: 'Facebook News',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#273C80',
  }
}