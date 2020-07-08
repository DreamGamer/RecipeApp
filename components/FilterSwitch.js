import React from 'react';
import { StyleSheet, Text, View, Switch } from "react-native";

import Colors from "../contants/Colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer} >
            <Text>{props.label}</Text>
            <Switch value={props.value} onValueChange={props.onValueChange} trackColor={{ false: Colors.danger, true: Colors.info }} />
        </View >
    )
};

const styles = StyleSheet.create({
    filterContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15,
    }
});

export default FilterSwitch;