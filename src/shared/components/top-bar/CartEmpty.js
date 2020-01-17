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
import {useDispatch} from "react-redux";


const CartEmpty = () => {

    const dispatch = useDispatch();

    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity onPress={() => dispatch({type: 'EMPTY_CART'})}>
                <View style={styles.cartView}>
                    <Image source={icons.cart_empty}/>
                </View>
            </TouchableOpacity>
        </View>
)
};

export default CartEmpty;