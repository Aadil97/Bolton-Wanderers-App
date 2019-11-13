import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FixturesScreen from '../screens/FixturesScreen';
import NewsScreen from '../screens/NewsScreen';

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

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'external-link'} />
  )
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'cog'} />
  ),
};

SettingsStack.path = '';

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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NewsStack,
  FixturesStack,
  SettingsStack,
},
{
  initialRouteName: "FixturesStack",
  backBehavior: "history",
  tabBarOptions: {
    activeBackgroundColor: '#273C80',
    activeTintColor: '#fff'
  }
});

tabNavigator.path = '';

export default tabNavigator;
