import React from 'react';
import { WebView } from 'react-native-webview';

export default class NewsScreen extends React.Component {
    render(){
        return (
            <WebView
                source={{uri:"https://twitter.com/OfficialBWFC"}}
            />
        )
    }
}

NewsScreen.navigationOptions = {
    title: 'News',
    headerTintColor: "blue",
};