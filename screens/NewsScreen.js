import React from 'react';
import {View, Text, Button} from 'react-native';

export default function NewsScreen() {
    return (
        <View>
            <Text>News goes here!</Text>
        </View>
    )
}

NewsScreen.navigationOptions = {
    title: 'News',
};