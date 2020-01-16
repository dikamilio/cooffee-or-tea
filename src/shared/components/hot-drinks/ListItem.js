import {Text, View} from "react-native";
import styles from "./styles";
import React from "react";

const ListItem = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{props.drink.name}</Text>
        </View>
    );
};

export default ListItem;