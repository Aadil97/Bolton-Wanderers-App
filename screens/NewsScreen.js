import React from 'react';
import { WebView } from 'react-native-webview';
import { Button, View, StyleSheet } from 'react-native';

export default class NewsScreen extends React.Component {
    render(){
        return (
          <View style={{flex: 1}}>
            <View style={styles.buttonContainer}>
            <Button
              onPress={() => {this.props.navigation.navigate('Twitter')}}
              title="Twitter"
              color="#273C80"
            />
            <Button
              onPress={() => {this.props.navigation.navigate('Facebook')}}
              title="Facebook"
              color="#273C80"
            />
            <Button
              onPress={() => {this.props.navigation.navigate('Instagram')}}
              title="Instagram"
              color="#273C80"
            />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '80%',
        justifyContent: 'space-evenly',
        backgroundColor: '#273C80',
    },
    button: {
      color: '#273C80',
    }
})

NewsScreen.navigationOptions = {
  title: 'News',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#273C80',
  }
}