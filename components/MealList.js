import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem"

const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);



    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id)
        return (
            <MealItem onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "mealDetail", params: {
                        mealID: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite,
                    }
                });
            }} title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} image={itemData.item.imageURL} />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.data} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={styles.fullWidth} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    fullWidth: {
        width: "100%",
    },
});

export default MealList;