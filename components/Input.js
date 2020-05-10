import React from 'react'
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return (
        <TextInput 
        style={{...styles.textBox, ...props.style}}
        {...props}/>
    )
}

export const styles = StyleSheet.create({
    textBox: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 40,
        marginVertical: 5
    }    
})

export default Input