import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/BWFC_LOGO.png')} />
      <Text>Results</Text>
      <WebView
                source={{uri: 'https://www.skysports.com/bolton-wanderers-results'}}
                renderLoading={this.renderLoading}
                startInLoadingState
                javaScriptEnabled={true}
                style={styles.web}
            />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    alignItems: 'center',
  },
  image: {
    width: '40%', 
    height: '40%',
  },
  web: {
    width: 350,
    height: 500,
  },
});
