import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Platform, TouchableNativeFeedback } from "react-native";

const CategoryGridItem = props => {
    let TouchableCompontent = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCompontent = TouchableNativeFeedback;
    }

    return (
        <View style={{ ...styles.gridItem, ...{ backgroundColor: props.color } }}>
            <TouchableCompontent style={{flex: 1}} onPress={props.onSelect}>
                <View style={styles.container}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCompontent>
        </View>
    )
};



const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: Dimensions.get("window").width * 0.5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 2 },
        elevation: 3,
        overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    },
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "ms-new-tai-lue-bold",
        fontSize: 18,
    }
});



export default CategoryGridItem;