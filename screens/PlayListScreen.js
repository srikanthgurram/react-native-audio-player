import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
import Player from '../components/Player'
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import localTrack from "../resources/pure.m4a";
import playlistData from "../data/playlist.json";

const PlayListScreen = props => {
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);
  
  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      jumpInterval: 10,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SEEK_TO
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,        
      ]
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
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
        isPlaylist={true}
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
      width: (Dimensions.get('window').width) / 2,
      height: (Dimensions.get('window').height)/3,
      borderRadius: (Dimensions.get('window').width) / 4,
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
      width: '70%',
      justifyContent: 'space-between',
      marginVertical: 20
    }
  });

  export default PlayListScreen;