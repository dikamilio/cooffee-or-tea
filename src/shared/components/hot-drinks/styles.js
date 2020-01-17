/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    hotDrinksContainer: {
        overflow: 'hidden',
    },
    hotDrinksLabel: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '100%'
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
        backgroundColor: '#50d8e9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    title: {
        fontSize: 26,
    },
})