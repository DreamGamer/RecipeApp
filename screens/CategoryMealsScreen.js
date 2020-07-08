import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/data";

import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam("catId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const aviableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = aviableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    )
    
    if (displayedMeals.length === 0) {
        return (
            <View style={styles.noMealsContainer}>
                <Text style={styles.noMealsText}>No meals found.</Text>
                <Text style={styles.noMealsText}>Change the Filters to see some Meals!</Text>
            </View>
        )
    }



    return (
        <MealList data={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam("catId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        title: selectedCategory.title
    }
}


const styles = StyleSheet.create({
    noMealsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noMealsText: {
        fontFamily: "ms-new-tai-lue-bold",
        fontSize: 18,
    },
});



export default CategoryMealsScreen;