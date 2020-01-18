/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import {combineReducers} from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        {
            id: '1',
            name: 'Black coffee'
        },
        {
            id: '2',
            name: 'Cafe au lait'
        },
        {
            id: '3',
            name: 'Coffee with milk'
        },
        {
            id: '4',
            name: 'Espresso'
        },
        {
            id: '5',
            name: 'Instant coffee'
        },
        {
            id: '6',
            name: 'Black tea'
        },
        {
            id: '7',
            name: 'Grean tea'
        },
        {
            id: '8',
            name: 'Flavored tea'
        },
        {
            id: '9',
            name: 'White tea'
        },
    ],
};

const drinkReducer = (state = INITIAL_STATE, action) => {
    const {
        current,
    } = state;
    switch (action.type) {
        case 'ADD_DRINK':

            const addedDrink = action.payload;
            let addedIndex = current.findIndex((obj => obj.id == addedDrink.id));
            let updated;
            if (addedIndex >= 0) {
                current[addedIndex].counter = current[addedIndex].counter + 1;
                updated = current;
            } else {
                addedDrink.counter = 1;
                addedDrink.prepared = false;
                updated = current.concat(addedDrink);
            }
            return {...state, current: updated};
        case 'EMPTY_CART':
            return {...state, current: []};
        case 'DRINK_PREPARED':

            let preparedDrink = action.payload;
            let preparedIndex = current.findIndex((obj => obj.id == preparedDrink.id));
            let prepared = [];
            if (preparedIndex >= 0) {
                current[preparedIndex].prepared = !current[preparedIndex].prepared;
                Object.assign(prepared, current);
            }
            return {...state, current: prepared};


        default:
            return state
    }
};

export default combineReducers({
    drinks: drinkReducer,
});