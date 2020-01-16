import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'

const Order = () => {
    const counter = useSelector(state => state.friends.current.length);
    const possible = useSelector(state => state.friends.possible.length);
    const dispatch = useDispatch();
    return (
        <View style={styles.cartContainer}>
            <Text>elo {counter} {possible}</Text>
            <TouchableOpacity onPress={() => dispatch({type: 'ADD_DRINK'})}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Order;