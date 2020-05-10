import React, {useState} from 'react'
import {
    View, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Image, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity
} from 'react-native'
import Input from '../components/Input'
import Icon from 'react-native-vector-icons/Ionicons';
import Config from "react-native-config";
import Colors from '../constants/Colors';

export default function YoutubeSearch() {
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [enteredValue, setEnteredValue] = useState('telugu comedy');
    const REGION_CODE='IN'
    const SAFE_SEARCH='strict'
    const SEARCH_TYPE='video'
    const MAX_RESULTS_COUNT=10
    const SEARCH_ORDER='relevance'

    const getSearchUrl = (enteredText) => {
        let url = `https://www.googleapis.com/youtube/v3/search/?key=${Config.YOUTUBE_API_KEY}&regionCode=${REGION_CODE}&safeSearch=${SAFE_SEARCH}&type=${SEARCH_TYPE}&q=${enteredText}&part=snippet,id&order=${SEARCH_ORDER}&maxResults=${MAX_RESULTS_COUNT}`
        return url;
    }

    const getSearchResults = enteredText =>{
        fetch(getSearchUrl(enteredText))
        .then(response => response.json())
        .then((responseJson)=> {
            const videoId = []
            responseJson.items.forEach(item => {
                videoId.push(item)  
            })
            setLoading(false);
            setDataSource(videoId)
        })
        .catch(error=>console.log(error))
    }

    const inputTextHandler = inputText => {
        setEnteredValue(inputText);
    }

    const searchButtonHandler = () => {
        getSearchResults(enteredValue);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    const FlatListItemSeparator = () => {
        return (
          <View style={{
             height: .5,
             width:"100%",
             backgroundColor:"rgba(0,0,0,0.5)",
            }}
            />
        )
    }

    const _renderItem = (data) => {
        return(
        <TouchableOpacity style={styles.list}>
            <View style={styles.searchResult}>
                <View style={styles.itemRow}>
                    <Text style={styles.title} numberOfLines={3}>{data.title}</Text>
                </View>                
                {/* <Text>{data.description}</Text> */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: data.thumbnails.default.url}}  />
                </View>
            </View>
        </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
            <View style={styles.searchBar}>
                <View style={styles.searchInput}>
                    <Input
                        autoFocus={true} 
                        onChangeText={inputTextHandler} 
                        value={enteredValue}
                        blurOnSubmit clearTextOnFocus placeholder='Search here..'
                    />
                </View>
                <View style={styles.searchButton}>
                    <Icon.Button name="ios-search" backgroundColor={Colors.primaryColor} onPress={searchButtonHandler}>
                        <Text style={styles.searchButtonText}>
                        Search
                        </Text>
                    </Icon.Button >
                </View>
            </View>    
            <FlatList
                data={dataSource}
                ItemSeparatorComponent = {FlatListItemSeparator}
                renderItem = {itemData => _renderItem(itemData.item.snippet)}
                keyExtractor = {item => item.id.videoId}
            />
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    searchBar:{
        flexDirection: 'row',
        padding: 10
    },
    searchInput:{
        width: '70%'
    },
    searchButton:{
        width: '30%'
    },    
    loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   backgroundColor: "#fff"
     },
    list:{
      paddingVertical: 4,
      margin: 5,
    //   backgroundColor: "#fff"
    },
    image:{
        width: 120,
        height: 90,
        backgroundColor: 'grey'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '40%',
        padding: 5
    },
    searchResult: {
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '60%',
        padding: 5
    },  
    title:{
        textAlign: 'left',
        fontSize: 16,
        // fontFamily: 'Roboto-Regular'
    },
    searchButtonText:{
        fontSize: 20, 
        color:'#ffff'
    }
  });