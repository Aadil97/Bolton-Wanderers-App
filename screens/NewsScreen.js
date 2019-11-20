import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class NewsScreen extends React.Component {
    render(){
        return (
            <View style={styles.buttonContainer}>
            <Entypo name='twitter' 
              style={styles.icon}
              onPress={() => {this.props.navigation.navigate('Twitter')}} 
            >
              <Text style={styles.text}> Twitter</Text>
            </Entypo>
            <Entypo name='facebook'
              style={styles.icon}
              onPress={() => {this.props.navigation.navigate('Facebook')}}
            >
              <Text style={styles.text}> Facebook</Text>
            </Entypo>
            <Entypo name='instagram'
              style={styles.icon}
              onPress={()=> {this.props.navigation.navigate('Instagram')}}
            >
              <Text style={styles.text}> Instagram</Text>
            </Entypo>
            <Entypo name='youtube'
              style={styles.icon}
              onPress={()=> {this.props.navigation.navigate('Video')}}
            >
              <Text style={styles.text}> Youtube</Text>
            </Entypo>
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
        backgroundColor: '#fff',
    },
    icon : {
      padding: '5%',
    },
    text : {
      fontSize: 10,
    },
})

NewsScreen.navigationOptions = {
  title: 'News',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#273C80',
  }
}