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
import {useSelector, useDispatch} from 'react-redux'
import OrderedListItem from "./OrderedListItem";
import {Navigation} from "react-native-navigation";
import {components} from "../../navigation/component-constants";

const Order = (props) => {
    const current = useSelector(state => state.drinks.current);
    const dispatch = useDispatch();

    React.useEffect(() => {
        Navigation.mergeOptions(props.componentId, {
            topBar: {
                rightButtons: [{
                    id: components.HEADER_CART_EMPTY,
                    component: {
                        name: components.HEADER_CART_EMPTY
                    }
                }]
            }
        })
    }, [props.componentId]);

    return (
        <View style={styles.cartContainer}>
            <View style={styles.orderLabel}>
                <Text style={styles.orderText}>My order</Text>
            </View>
            <FlatList data={current} renderItem={({item}) => <OrderedListItem drink={item} onPress={() => dispatch({
                type: 'DRINK_PREPARED',
                payload: item
            })}/>} keyExtractor={item => item.id}/>

        </View>
    )
};

export default Order;