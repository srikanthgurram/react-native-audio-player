import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, Platform, Dimensions} from 'react-native'

const PodcastItem = props => {
    let TouchInput = TouchableOpacity;
    if(Platform.OS === 'android'){
        TouchInput = TouchableNativeFeedback;
    }
    return (
        <TouchInput onPress={props.onSelect} style={styles.container}>
            <View style={styles.podItem}>
                <View style={styles.itemRow}>
                    <Text style={styles.title} numberOfLines={3}>{props.title}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri:props.imageUrl}} style={styles.image}/>
                </View>
            </View>
        </TouchInput>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        overflow: 'hidden',
    },
    podItem:{
        height: 140,
        margin: 10,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        borderRadius: 5,
        // padding: 5
    },
    title:{
        textAlign: 'left',
        fontSize: 16,
        // fontFamily: 'Roboto-Regular'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '60%',
        padding: 10
    },
    image: {
        width: 140,
        height: 120,
        resizeMode:'stretch'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '40%',
        padding: 10
    }
})
export default PodcastItem