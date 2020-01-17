/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';

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
        backgroundColor: '#50d8e9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    itemPrepared: {
        backgroundColor: '#30e961',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})