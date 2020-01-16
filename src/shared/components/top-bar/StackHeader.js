import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import styles from "./styles";
const StackHeader = () => {
    return (
        <View style={styles.stackHeaderContainer}>
            <Text style={styles.stackHeaderTitle}>CoffeeOrTea</Text>
        </View>
    )
}

export default StackHeader;