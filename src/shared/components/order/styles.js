/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';
import colors from "../../style/colors";

export default StyleSheet.create({
    cartContainer: {
        overflow: 'hidden',
    },
    orderLabel: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '100%'
    },
    orderText: {
        fontSize: 16,
        fontWeight: 'bold'
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
    itemPrepared: {
        backgroundColor: colors.drinkOrdered,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.white
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})