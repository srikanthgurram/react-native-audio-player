import React, {useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents
} from "react-native-track-player";

const ProgressBar = () => {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: "red" }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "grey"
        }}
      />
    </View>
  );
}

const Player = props => {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState(props.title);
  const [trackArtwork, setTrackArtwork] = useState(props.artWork);
  const [trackArtist, setTrackArtist] = useState(props.artist);
  const { onNext, onPrevious, onTogglePlayback, isPlaylist } = props;

  useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track;
      if(track !== {}){
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);  
      }
    }
  });
  let  toggleButtonIcon = "pause-circle";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    toggleButtonIcon = "pause-circle";
  }else{
    toggleButtonIcon = "play-circle";
  }

  const PrevButton = () => (
    <TouchableOpacity activeOpacity={0.5} onPress={onPrevious}>
      <Icon name="step-backward" size={40}/>
    </TouchableOpacity>
  )

  const NextButton = () => (
    <TouchableOpacity activeOpacity={0.5} onPress={onNext}>
      <Icon name="step-forward" size={40}/>
    </TouchableOpacity>
  )

  const TogglePlay = () => {
    return(
      <TouchableOpacity  activeOpacity={0.5} onPress={onTogglePlayback}>
        <Icon name={toggleButtonIcon} size={100} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContiner}>
        <Image style={styles.image} source={{uri: trackArtwork}}  />
      </View>
      <ProgressBar />
      <View style={styles.sectionContainer}>
        <Text style={styles.title} numberOfLines={2}>{trackTitle}</Text>
        <Text style={styles.artist} numberOfLines={1}>{trackArtist}</Text>      
      </View>
      <View style={styles.buttonsContainer}>
        {isPlaylist ? <PrevButton /> : null}
        <TogglePlay />
        {isPlaylist ? <NextButton /> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 20,
    },
    body: {
      // backgroundColor: Colors.white,
    },
    sectionContainer: {
      padding: 10,
      width: '90%',
    },
    title: {
      marginTop: 10,
      fontSize: Dimensions.get('window').height < 600 ? 14:16
    },
    artist: {
      fontWeight: "bold"
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
      borderRadius: Dimensions.get('window').width < 300 ? 90:150,      overflow: 'hidden',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'stretch',
      backgroundColor: 'grey'
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 10,
    },
    progress: {
      height: 1,
      width: "90%",
      marginTop: 10,
      flexDirection: "row"
    },    
  });

  export default Player;