/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {Text, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import React from "react";

const OrderedListItem = (props) => {
    return (
        <View style={props.drink.prepared ? styles.itemPrepared : styles.item}>
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={styles.row}>
                    <Text style={styles.title}>{props.drink.name}</Text>
                    <Text style={styles.title}>{props.drink.counter}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default OrderedListItem;