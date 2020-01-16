/**
 * @format
 */

import React from "react";
import {Navigation} from "react-native-navigation";
import {setRoot} from "./src/shared/navigation/navigation";
import {components} from "./src/shared/navigation/component-constants";
import SideMenu from "./src/shared/components/side-menu/SideMenu";
import StackHeader from "./src/shared/components/top-bar/StackHeader";
import Cart from "./src/shared/components/top-bar/Cart";
import Order from "./src/shared/components/order/Order";
import HotDrinks from "./src/shared/components/hot-drinks/HotDrinks";
import {Provider} from "react-redux";
import {store} from "./src/shared/store/store";
import App from "./App";


Navigation.registerComponent(components.MAIN_SCREEN, () => (props) => (
    <Provider store = {store}>
        <HotDrinks {...props}/>
    </Provider>
), () => HotDrinks);
Navigation.registerComponent(components.SIDE_MENU, () => SideMenu);
Navigation.registerComponent(components.STACK_HEADER, () => StackHeader);
Navigation.registerComponent(components.HEADER_CART, () => (props) => (
    <Provider store = {store}>
        <Cart {...props}/>
    </Provider>
), () => Cart);
Navigation.registerComponent(components.ORDER, () => (props) => (
    <Provider store = {store}>
        <Order {...props}/>
    </Provider>
), () => Order);

Navigation.events().registerAppLaunchedListener(() => {
    setRoot()
});
