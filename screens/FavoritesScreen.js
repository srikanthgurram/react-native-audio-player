import React from 'react'
import {View, Text, StyleSheet, Button, Platform} from 'react-native'
import Colors from '../constants/Colors'

const FavoritesScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Favorites Screen</Text>
            <Button color={Colors.primaryColor} title='Back to Home' onPress={() => {
                props.navigation.popToTop()
            }}/>             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default FavoritesScreen;