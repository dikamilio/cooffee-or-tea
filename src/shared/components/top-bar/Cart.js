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
    const counter = useSelector(state => state.friends.current.length);
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