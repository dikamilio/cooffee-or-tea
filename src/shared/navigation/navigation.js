import {Navigation} from 'react-native-navigation';
import {components} from "./component-constants";


const setDefaultNavigationOptions = () => {
    Navigation.setDefaultOptions({
        sideMenu: {
            openGestureMode: 'bezel',
        },
        topBar: {
            elevation: 0,
            noBorder: true,
            // leftButtons: [
            //     //{id: 'account', icon: icons.burgerMenu, color: colors.blue},
            // ],
            title: {
                component: {
                    id: components.STACK_HEADER,
                    name: components.STACK_HEADER,
                    alignment: 'center',
                },
            },
            rightButtons: [{
                id: components.HEADER_CART,
                component: {
                    name: components.HEADER_CART
                }
            }]
        },
    })
}


const setRoot = () => {
    setDefaultNavigationOptions();
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: components.SIDE_MENU,
                    }
                },
                center: {
                    stack: {
                        children: [{
                            component: {
                                id: components.MAIN_SCREEN,
                                name: components.MAIN_SCREEN
                            }
                        }]
                    }

                }
            }
        }
    })
};

function navigateToOrder() {
    alert('elo');
    Navigation.push(components.MAIN_SCREEN, {
        component: {
            name: components.ORDER,
            id: components.ORDER
        }
    });
};

export {
    setRoot,
    navigateToOrder
}