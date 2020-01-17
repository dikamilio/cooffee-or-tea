/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {Text, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import React from "react";

const ListItem = (props) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => props.onPress()}>
                <Text style={styles.title}>{props.drink.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;