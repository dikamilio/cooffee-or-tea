/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';
import colors from "../../style/colors";

export default StyleSheet.create({
    hotDrinksContainer: {
        overflow: 'hidden',
    },
    hotDrinksLabel: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.defaultBorder,
        marginHorizontal: 10
    },
    hotDrinksText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        marginTop: 12,
    },
    item: {
        backgroundColor: colors.drinkItem,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.white
    },
    title: {
        fontSize: 26,
    },
})