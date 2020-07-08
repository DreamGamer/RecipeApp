import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.noFavoritesContainer}>
                <Text style={styles.noFavoritesText}>No Favorite meals there.</Text>
                <Text style={styles.noFavoritesText}>Start adding some!</Text>
            </View>
        )
    }

    return (
        <MealList data={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        title: "Your Favorites",
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }}></Item>
            </HeaderButtons>
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noFavoritesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noFavoritesText: {
        fontFamily: "ms-new-tai-lue-bold",
        fontSize: 18,
    },
});



export default FavoritesScreen;