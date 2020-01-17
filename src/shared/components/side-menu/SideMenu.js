/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import React from "react";
import {
    View,
    Text,
} from 'react-native';
import styles from "./styles";

const SideMenu = () => {
    return (
        <View style={styles.sideMenu}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Coffee or Tea</Text>
            </View>
        </View>
    )
}

export default SideMenu;