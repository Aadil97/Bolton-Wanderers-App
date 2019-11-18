import React from 'react';
import WebView from 'react-native-webview';

export default function FixturesScreen(){
    return(
       <WebView
            source={{uri: "https://www.skysports.com/bolton-wanderers-fixtures"}}
       />
    );
}

FixturesScreen.navigationOptions = {
    title: 'Fixtures',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#273C80'
    }
}