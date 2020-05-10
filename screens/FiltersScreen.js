import React from 'react'
import {View, Text, StyleSheet, Button, Platform} from 'react-native'
import Colors from '../constants/Colors'

const FiltersScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Filters Screen</Text>

            <Button  color={Colors.primaryColor} title='Next' onPress={ () => {
                props.navigation.navigate({routeName: 'Favorites'})
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
      },
})

export default FiltersScreen;