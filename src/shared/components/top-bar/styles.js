/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';
import colors from "../../style/colors";

export default StyleSheet.create({
    stackHeaderContainer: {
        overflow: 'hidden',
        width: 200
    },
    stackHeaderTitle: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        color: colors.blue,
        fontWeight: 'bold',
    },
    cartContainer: {
        overflow: 'hidden'
    },
    cartView: {
        flexDirection: 'row',
        overflow: 'hidden'
    }
})