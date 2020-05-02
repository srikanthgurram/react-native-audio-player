import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import PlayerScreen from '../screens/PlayerScreen'

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

export default createAppContainer(MainNavigation)