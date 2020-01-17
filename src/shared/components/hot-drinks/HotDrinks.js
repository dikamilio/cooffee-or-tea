/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import React from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import ListItem from "./ListItem";

const HotDrinks = () => {

    const possible = useSelector(state => state.drinks.possible);
    const dispatch = useDispatch();
    return (
        <View style={styles.hotDrinksContainer}>
            <View style={styles.hotDrinksLabel}>
                <Text style={styles.hotDrinksText}>Place an order</Text>
            </View>
            <FlatList data = {possible} renderItem={({item}) => <ListItem drink={item} onPress={() => dispatch({type: 'ADD_DRINK', payload: item})}/>} keyExtractor={item => item.id}/>
        </View>
    )
};

export default HotDrinks;