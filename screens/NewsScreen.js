import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class NewsScreen extends React.Component {
    render(){
        return (
            <View style={styles.buttonContainer}>
              <View style={styles.columnLeft}>
            <Entypo name='twitter' 
              style={styles.icon}
              size={styles.iconSize}
              onPress={() => {this.props.navigation.navigate('Twitter')}} 
            >
              <Text style={styles.text}> Twitter</Text>
            </Entypo>
            <Entypo name='facebook'
              style={styles.icon}
              size={styles.iconSize}
              onPress={() => {this.props.navigation.navigate('Facebook')}}
            >
              <Text style={styles.text}> Facebook</Text>
            </Entypo>
            </View>
              <View style={styles.columnRight}>
            <Entypo name='instagram'
              style={styles.icon}
              size={styles.iconSize}
              onPress={()=> {this.props.navigation.navigate('Instagram')}}
            >
              <Text style={styles.text}> Instagram</Text>
            </Entypo>
            <Entypo name='youtube'
              style={styles.icon}
              size={styles.iconSize}
              onPress={()=> {this.props.navigation.navigate('Video')}}
            >
              <Text style={styles.text}> Youtube</Text>
            </Entypo>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    columnLeft : {
      flex: 1,
    },
    columnRight : {
      flex: 1,
    },
    icon : {
      padding: '5%',
      paddingBottom: '20%',
    },
    iconSize : 150,
    text : {
      fontSize: 30,
    },
})

NewsScreen.navigationOptions = {
  title: 'News',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#273C80',
  }
}