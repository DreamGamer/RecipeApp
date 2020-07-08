import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

// SCREENS
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../contants/Colors";



const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.info,
    },
    headerTitleStyle: {
        color: Colors.white,
        fontFamily: "ms-new-tai-lue-bold",
    },
    headerBackTitleStyle: {
        fontFamily: "ms-new-tai-lue-bold",
    }
}



const RecipeNavigator = createStackNavigator({
    categories: {
        screen: CategoriesScreen,
    },
    categoryMeals: {
        screen: CategoryMealsScreen,
    },
    mealDetail: {
        screen: MealDetailScreen,
    },
}, {
    defaultNavigationOptions: defaultNavOptions
});

const FavoriteNavigator = createStackNavigator({
    favorites: {
        screen: FavoritesScreen
    },
    mealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: defaultNavOptions
});



const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: RecipeNavigator,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: (tabInformation) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInformation.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (tabInformation) => {
                return <Ionicons name="ios-star" size={25} color={tabInformation.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.red,
        labelStyle: {
            fontFamily: "ms-new-tai-lue",
        }
    }
});


const FiltersNavigator = createStackNavigator({
    filters: FiltersScreen,
}, {
    defaultNavigationOptions: defaultNavOptions
});



const MainNavigator = createDrawerNavigator({
    mealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: "Filter"
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.red,
        labelStyle: {
            fontFamily: "ms-new-tai-lue",
        }
    }
});

export default createAppContainer(MainNavigator);