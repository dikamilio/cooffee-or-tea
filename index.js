/**
 * @format
 */

import App from './App';
import {Navigation} from "react-native-navigation";
import {setRoot} from "./src/shared/navigation/navigation";
import {components} from "./src/shared/navigation/component-constants";
import SideMenu from "./src/shared/components/side-menu/SideMenu";
import StackHeader from "./src/shared/components/top-bar/StackHeader";
import Cart from "./src/shared/components/top-bar/Cart";
import Order from "./src/shared/components/order/Order";

Navigation.registerComponent(components.MAIN_SCREEN, () => App);
Navigation.registerComponent(components.SIDE_MENU, () => SideMenu);
Navigation.registerComponent(components.STACK_HEADER, () => StackHeader);
Navigation.registerComponent(components.HEADER_CART, () => Cart);
Navigation.registerComponent(components.ORDER, () => Order);

Navigation.events().registerAppLaunchedListener(() => {
    setRoot()
});
