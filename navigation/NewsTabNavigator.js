import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import TwitterScreen from '../screens/TwitterScreen';
import FacebookScreen from '../screens/FacebookScreen';
import InstagramScreen from '../screens/InstagramScreen';


const NewsTabNavigator = createMaterialTopTabNavigator ({
    Twitter: { screen: TwitterScreen },
    Facebook: { screen: FacebookScreen },
    Instagram: { screen: InstagramScreen},
},
{
    initialRouteName: "Facebook",
});
const NewsTabNavigatorContainer = createAppContainer(NewsTabNavigator);

export default NewsTabNavigatorContainer;