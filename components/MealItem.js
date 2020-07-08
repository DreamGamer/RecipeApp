import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.backgroundImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text style={styles.detailText}>{props.duration} minutes</Text>
                        <Text style={styles.detailText}>{props.complexity}</Text>
                        <Text style={styles.detailText}>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row",
    },
    mealItem: {
        height: 200,
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#f1f1f1",
        marginVertical: 10,
    },
    mealHeader: {
        height: "85%",
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: "ms-new-tai-lue-bold",
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
    },
    titleContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    detailText: {
        fontFamily: "ms-new-tai-lue",
    }
});

export default MealItem;