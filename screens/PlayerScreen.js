import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
  
const PlayerScreen = props => {
  const title = props.navigation.getParam('title');
  const audioUrl = props.navigation.getParam('url');
  const albumArt = props.navigation.getParam('albumArt');
  const [isPlaying, setIsPlaying] = useState(false);

  const StopButton = props => (
    <TouchableOpacity activeOpacity={0.5} onPress={stopMusic}>
      <Icon name="stop" size={30}/>
    </TouchableOpacity>
  )

  const PrevButton = props => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
      <Icon name="step-backward" size={30}/>
    </TouchableOpacity>
  )

  const NextButton = props => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
      <Icon name="step-forward" size={30}/>
    </TouchableOpacity>
  )

  const togglePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying (true);
  }

  const stopMusic = () => {
    setIsPlaying(false);
  }

  const TogglePlay = props => {
    return(
      <TouchableOpacity  activeOpacity={0.5} onPress={togglePlay}>
        {isPlaying ? <Icon name="pause" size={30} /> : <Icon name="play" size={30} />}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionDescription}>
        {props.description}
        </Text>
      </View>
      <View style={styles.imageContiner}>
        <Image source={albumArt} style={styles.Image}/>
      </View>
      <View style={styles.buttonsContainer}>
        <PrevButton />
        <TogglePlay />
        <StopButton />
        <NextButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: Colors.lighter,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
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
      width: Dimensions.get('window').width < 300 ? 200:240,
      height: Dimensions.get('window').height < 600 ? 200:240,
      borderRadius: Dimensions.get('window').width < 300 ? 100:120,
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

  export default PlayerScreen;