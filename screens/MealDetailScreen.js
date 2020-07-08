import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {

    const mealID = props.navigation.getParam("mealID");
    const mealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealID));
    const availablMeals = useSelector(state => state.meals.meals);

    const selectedMeal = availablMeals.find(meal => meal.id === mealID);


    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealID));
    }, [dispatch, mealID]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: mealIsFavorite});
    }, [mealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageURL}} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.detailText}>{selectedMeal.duration} minutes</Text>
                <Text style={styles.detailText}>{selectedMeal.complexity}</Text>
                <Text style={styles.detailText}>{selectedMeal.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient, index) => <Text style={styles.textItem} key={ingredient}>{ingredient}</Text>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step, index) => <Text style={styles.textItem} key={step}>{index += 1}. {step}</Text>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    const toggleFavorite = navigationData.navigation.getParam("toggleFav")
    const isFavorite = navigationData.navigation.getParam("isFav");

    return {
        title: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Favorite" iconName={isFavorite ? "ios-star" : "ios-star-outline"} onPress={toggleFavorite} /></HeaderButtons>
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",
    },
    image: {
        width: "100%",
        height: 200,

    },
    title: {
        fontFamily: "ms-new-tai-lue",
        fontSize: 22,
        textAlign: "center",
    },
    textItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
    }
});



export default MealDetailScreen;