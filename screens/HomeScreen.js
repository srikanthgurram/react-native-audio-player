import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import playlistData from "../data/playlist.json";

const HomeScreen = props => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Introdution</Text>
            <Text style={styles.sectionDescription}>
                Tap on the follwing button to launch the Audio player
            </Text>
            {/* <Button title='Player' onPress={() => {
              props.navigation.navigate({
                routeName: 'Player', 
                params: {
                  trackId: playlistData[0].id,
                  title: playlistData[0].title,
                  url: playlistData[0].url,
                  artWork: playlistData[0].artwork,
                  artist: playlistData[0].artist,
                  duration: playlistData[0].duration
                }
              }) 
              }
            }/>  */}
            <View style={styles.buttonContainer}> 
              <Button title='PlayList' onPress={() => {
                props.navigation.navigate({
                  routeName: 'Playlist'
                })            
              }}/>
            </View>
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
    buttonContainer: {
      marginVertical: 20
    }
  });

export default HomeScreen;