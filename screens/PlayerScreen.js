import React from 'react'
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
  const PlayButton = () => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
    <Icon name="play" size={30}/>
  </TouchableOpacity>
  )

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
      <View style={styles.buttonContainer}>
        <PlayButton />
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
    buttonContainer: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'space-evenly'
    }
  });

  export default PlayerScreen;