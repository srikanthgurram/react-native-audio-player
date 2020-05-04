import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { PlaylistData } from '../data/dummy-data'

const HomeScreen = props => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Introdution</Text>
            <Text style={styles.sectionDescription}>
                Tap on the follwing button to launch the Audio player
            </Text>
            <Button title='Player' onPress={() => {
              props.navigation.navigate({
                routeName: 'Player', 
                params: {
                  title: PlaylistData[0].title,
                  url: PlaylistData[0].url,
                  artist: PlaylistData[0].artist,
                  albumArt: PlaylistData[0].albumArt
                }
              }) 
              }
            }/> 
            <Button title='PlayList' onPress={() => {
              props.navigation.navigate({
                routeName: 'Playlist'
              })            
            }}/>
        </View>
    );
  }


const styles = StyleSheet.create({
    scrollView: {
      // backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      // backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      // color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      // color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      // color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

export default HomeScreen;