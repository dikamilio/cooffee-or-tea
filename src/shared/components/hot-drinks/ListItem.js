/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {Text, Animated, TouchableOpacity} from "react-native";
import styles from "./styles";
import React, {useState} from "react";

const ListItem = (props) => {

    const [fadeAnim] = useState(new Animated.Value(1))

    const onPress = () => {
        Animated.sequence([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0,
                    duration: 200,
                }
            ),
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 200,
                }
            )
        ]).start();
        props.onPress();
    };


    return (
        <Animated.View style={{...styles.item, opacity: fadeAnim}}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={styles.title}>{props.drink.name}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default ListItem;