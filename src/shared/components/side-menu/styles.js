/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';
import colors from "../../style/colors";

export default StyleSheet.create({
    sideMenu: {
        backgroundColor: colors.white,
        flex: 1,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})