import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import PlayerScreen from '../screens/PlayerScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DownloadsScreen from '../screens/DownloadsScreen'

const MainNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen,
        title: 'Dashboard'
    },
    Player: {
        screen: PlayerScreen,
        title: 'Player'
    }
}, {
    initialRouteName: 'Home'
})

const TabNavigator = createBottomTabNavigator({
    Home: MainNavigation,
    Download: {
        screen: DownloadsScreen,
        title: 'Downloads'
    },
});
  
export default createAppContainer(TabNavigator)