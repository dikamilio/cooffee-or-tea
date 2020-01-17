/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import React from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./styles";
import icons from "../../icons/icons"
import {navigateToOrder} from "../../navigation/navigation";
import {useSelector} from "react-redux";


const Cart = () => {
    function reducer(total, drink) {
        return total + drink.counter;
    }
    //TODO use reselect
    const counter = useSelector(state => state.drinks.current.reduce(reducer, 0));
    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity onPress={() => navigateToOrder()}>
                <View style={styles.cartView}>
                    <Text>{counter}</Text>
                    <Image source={icons.cart}/>
                </View>
            </TouchableOpacity>
        </View>
)
};

export default Cart;