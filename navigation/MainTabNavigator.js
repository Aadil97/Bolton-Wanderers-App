import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import FixturesScreen from '../screens/FixturesScreen';
import NewsScreen from '../screens/NewsScreen';
import FacebookScreen from '../screens/FacebookScreen';
import TwitterScreen from '../screens/TwitterScreen';
import InstagramScreen from '../screens/InstagramScreen';
import VideoScreen from '../screens/VideoScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';

const FixturesStack = createStackNavigator(
  {
    Fixtures: FixturesScreen,
  },
  config
);

FixturesStack.navigationOptions = {
  tabBarLabel: 'Fixtures',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'table'} />
  ),
};

FixturesStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
    Facebook: FacebookScreen,
    Twitter: TwitterScreen,
    Instagram: InstagramScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'newspaper-o'} />
  ),
};

NewsStack.path='';

const VideoStack = createStackNavigator(
  {
    Video: VideoScreen,
  },
  config
);

VideoStack.navigationOptions = {
  tabBarLabel: 'Videos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'play-circle'} />
  ),
};

VideoStack.path='';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NewsStack,
  FixturesStack,
  VideoStack,
},
{
  initialRouteName: "NewsStack",
  backBehavior: "history",
  resetOnBlur: 'true',
  tabBarOptions: {
    activeBackgroundColor: '#273C80',
    activeTintColor: '#fff',
  },
});

tabNavigator.path = '';

export default tabNavigator;
