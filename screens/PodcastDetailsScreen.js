import React from 'react'
import {View, Text, StyleSheet, Button, Platform, Image, Dimensions} from 'react-native'
import { PODCASTS } from '../data/dummy-data'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'

const PodcastDetailScreen = props => {
    const podcastId = props.navigation.getParam('podcastId');
    const selectedPodcast = PODCASTS.find(pod => pod.id === podcastId);

    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>{selectedPodcast.title}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={selectedPodcast.imageUrl}/>
            </View>

            <Button  color={Colors.primaryColor} title='Next' onPress={ () => {
                props.navigation.navigate({routeName: 'Filters'})
            }}/>              
        </View>
    )
}

PodcastDetailScreen.navigationOptions = navigationData => {
    const podcastId = navigationData.navigation.getParam('podcastId');
    const selectedPodcast = PODCASTS.find(pod => pod.id === podcastId);
    const title = (selectedPodcast.title).slice(0,22)+'...'
    
    return {
        headerTitle: title,
        headerRight: () => (
            <View style={styles.iconContainer}>
            <Icon name={Platform.OS === "ios" ? "ios-heart" : "ios-heart-empty"} size={25} color='white'/>
          </View>
    
        ),
    }
}
const styles = StyleSheet.create({
    iconContainer:{
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: Dimensions.get('window').height < 600 ? 10 : 20
    },
    title: {
        // fontFamily: 'Roboto-Bold',
        fontSize: Dimensions.get('window').height < 600 ? 18 : 20
    },
    imageContainer:{
        margin: 10
    },
    image: {
        width: Dimensions.get('window').width < 400 ? 220 : 340,
        height: Dimensions.get('window').height < 600 ? 200 : 300,
        resizeMode:'stretch'
    }
})

export default PodcastDetailScreen;