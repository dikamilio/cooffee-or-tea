/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import friendReducer from '../reducers/drink.reducer';
import {createStore} from "redux";

const store = createStore(friendReducer);

export {store}
