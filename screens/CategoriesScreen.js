import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const _categoryHandler = categoryId => {
        props.navigation.navigate({
            routeName: 'Podcasts', 
            params: {
                categoryId: categoryId
            }
        })
    }

    const _renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={_categoryHandler.bind(this, itemData.item.id)}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}    
            renderItem={_renderGridItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CategoriesScreen;