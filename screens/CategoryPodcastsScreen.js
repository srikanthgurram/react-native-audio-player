import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native'
import {CATEGORIES, PODCASTS} from '../data/dummy-data'
import PodcastItem from '../components/PodcastItem'

const CategoryPodcastsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedPodcasts = PODCASTS.filter(pod => pod.categoryIds.indexOf(catId) !== -1);
    
    const podcastHandler = podcast => {
        console.log(podcast)
        props.navigation.navigate({
            routeName: 'Player', 
            params: {
                trackId: podcast.item.id,
                title: podcast.item.title,
                url: podcast.item.url,
                artWork: podcast.item.artwork,
                artist: podcast.item.artist,
                duration: podcast.item.duration
            }
            
        })
    }

    const displayPodcast = itemData => {
        return (
            <PodcastItem 
                title={itemData.item.title}
                imageUrl={itemData.item.artwork}
                duration={itemData.item.duration}  
                onSelect={() => podcastHandler(itemData)}                     
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={selectedPodcasts}    
                renderItem={displayPodcast}
                keyExtractor={item => item.id}
                style={{width: '100%'}}
            />            
        </View>
    )
}

CategoryPodcastsScreen.navigationOptions =  navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
    return {
        title: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    categoryName: {
        // fontFamily: 'Roboto-Bold'
    }
})

export default CategoryPodcastsScreen
;