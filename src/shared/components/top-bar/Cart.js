import React from "react";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from "./styles";
import icons from "../../icons/icons"
import {navigateToOrder} from "../../navigation/navigation";


const Cart = () => {
    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity onPress={() => navigateToOrder()}>
                <Image source={icons.cart}/>
            </TouchableOpacity>
        </View>
    )
};

export default Cart;