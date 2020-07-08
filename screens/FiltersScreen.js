import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import FilterSwitch from "../components/FilterSwitch";
import { useDispatch } from "react-redux";

import { setFilters } from "../store/actions/meals";

const FiltersScreen = props => {
    // STATES
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegataran, setIsVegataran] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegataran: isVegataran,
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegataran, dispatch]);

    useEffect(() => {
        saveFilters()
    }, [saveFilters]);


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters</Text>
            <FilterSwitch label="Gluten Free" value={isGlutenFree} onValueChange={value => setIsGlutenFree(value)} />
            <FilterSwitch label="Lactose Free" value={isLactoseFree} onValueChange={value => setIsLactoseFree(value)} />
            <FilterSwitch label="Vegan" value={isVegan} onValueChange={value => setIsVegan(value)} />
            <FilterSwitch label="Vegataran" value={isVegataran} onValueChange={value => setIsVegataran(value)} />
        </View>
    )
};




FiltersScreen.navigationOptions = (navigationData) => {
    return {
        title: "Filter Meals",
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
        alignItems: "center"
    },
    title: {
        fontFamily: "ms-new-tai-lue-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
    },
});



export default FiltersScreen;