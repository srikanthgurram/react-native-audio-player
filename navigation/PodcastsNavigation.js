import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryPodcastsScreen from '../screens/CategoryPodcastsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import PodcastDetailsScreen from '../screens/PodcastDetailsScreen'
import {Platform} from 'react-native'
import Colors from '../constants/Colors'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerScreen from '../screens/PlayerScreen'
import PlayListScreen from '../screens/PlayListScreen'
const defaultNavigationOptions =  {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerBackTitle: 'Back'
}

const PodcastsNavigation = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: 'Podcast Categories'
        }        
    },
    Podcasts: {
        screen: CategoryPodcastsScreen,
    },
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            title: 'Filters'
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            title: 'Favorites'
        }        
    },
    Podcast: {
        screen: PodcastDetailsScreen,
        navigationOptions: {
            title: 'Podcast Details'
        }        
    },
    Player: {
        screen: PlayerScreen
    },
    Playlist: {
        screen: PlayListScreen
    }
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultNavigationOptions
})

const FaviouritesStack = createStackNavigator({
    Favorites: FavoritesScreen,
    Player: PlayerScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultNavigationOptions
})

const TabBarNavigator = createBottomTabNavigator({
    Home: {
        screen: PodcastsNavigation,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                  <Icon
                    name="ios-home"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              }
        } 
    },
    Favorites: {
        screen: FaviouritesStack,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                  <Icon
                    name="ios-heart"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
            }
        }
    },
},{
    tabBarOptions: {
        activeBackgroundColor: '',
        inactiveBackgroundColor: '',
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: '#ccc'
    }
})
export default createAppContainer(TabBarNavigator)