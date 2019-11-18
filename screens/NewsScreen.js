import React from 'react';
import { WebView } from 'react-native-webview';
import { Button, View, StyleSheet } from 'react-native';

export default class NewsScreen extends React.Component {
    static navigationOptions ={
        headerTitle:() => (
            <View style={styles.headerButtons}>
            <Button
              onPress={() => alert('This is a button!')}
              title="Twitter"
              color="#273C80"
            />
            <Button
              onPress={() => alert('This is a button!')}
              title="Facebook"
              color="#273C80"
            />
            <Button
              onPress={() => alert('This is a button!')}
              title="Instagram"
              color="#273C80"
            />
            </View>
          ),
        headerTintColor: '#fff',
        headerStyle: {
        backgroundColor: '#273C80',
        }
    };
    render(){
        return (
            <WebView
                source={{uri:"https://twitter.com/OfficialBWFC"}}
            />
        )
    }
}

const styles = StyleSheet.create({
    headerButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    }
})