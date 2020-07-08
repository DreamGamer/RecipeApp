import React from "react";
import { StyleSheet, View, Text, Button, Dimensions, TouchableOpacity } from "react-native";

import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridItem from "../components/CategoryGridItem";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridItem title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate({
                    routeName: "categoryMeals", params: {
                        catId: itemData.item.id,
                    }
                });
            }} />
        )
    }


    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = (navigationData) => {

    return {
        title: "Meal Categories",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName="ios-menu" onPress={() => {
            navigationData.navigation.toggleDrawer();
        }}></Item></HeaderButtons>
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});


export default CategoriesScreen;