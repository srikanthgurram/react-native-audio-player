import React, {useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
import Player from '../components/Player'
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import Icon from 'react-native-vector-icons/Ionicons';

const PlayerScreen = props => {
  const trackId = props.navigation.getParam('trackId');
  const title = props.navigation.getParam('title');
  const audioUrl = props.navigation.getParam('url');
  const artWork = props.navigation.getParam('artWork');
  const artist = props.navigation.getParam('artist');
  const duration = props.navigation.getParam('duration');

  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);
  
  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
      ]
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: trackId,
        url: audioUrl,
        title: title,
        artist: artist,
        artwork: artWork,
        duration: duration
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Player
        onNext={skipToNext}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
        isPlaylist={false}
        title={title}
        artWork={artWork}
        url={audioUrl}
      />
      <Text style={styles.state}>{getStateName(playbackState)}</Text>
    </View>
  )
}

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return "None";
    case TrackPlayer.STATE_PLAYING:
      return "Playing";
    case TrackPlayer.STATE_PAUSED:
      return "Paused";
    case TrackPlayer.STATE_STOPPED:
      return "Stopped";
    case TrackPlayer.STATE_BUFFERING:
      return "Buffering";
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

async function stopPlayback() {
  try {
    await TrackPlayer.stop();
  } catch (_) {}
}

PlayerScreen.navigationOptions = navigationData => {
  const title = (navigationData.navigation.getParam('title')).slice(0,22)+'...'

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
    container: {
      // backgroundColor: Colors.lighter,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
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
    imageContiner: {
      width: Dimensions.get('window').width < 300 ? 180:300,
      height: Dimensions.get('window').height < 600 ? 180:300,
      borderRadius: Dimensions.get('window').width < 300 ? 90:150,     
      overflow: 'hidden',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image:{
      width: '100%',
      height: '100%'
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'space-between',
      marginVertical: 20
    },
    iconContainer:{
      flexDirection: 'row'
    },    
  });

  export default PlayerScreen;