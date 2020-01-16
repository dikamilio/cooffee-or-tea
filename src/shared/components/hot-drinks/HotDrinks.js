import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import {Navigation} from 'react-native-navigation';
import {components} from "../../navigation/component-constants";
import {navigateToOrder} from "../../navigation/navigation";

// function useNavigationEvents(handler: (event: NavigationButtonPressedEvent) => void, inputs: any[]) {


const HotDrinks = (props) => {

    // useNavigationEvents((buttonId, componentId) => {
    //     alert(buttonId);
    // }, []);
    //console.warn(JSON.stringify(props))
    const counter = useSelector(state => state.friends.current.length);
    const possible = useSelector(state => state.friends.possible.length);
    const dispatch = useDispatch();
    return (
        <View style={styles.hotDrinksContainer}>
            <Text>elo {counter} {possible}</Text>
            <TouchableOpacity onPress={() => dispatch({type: 'ADD_FRIEND'})}>
                <Text>Add2</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HotDrinks;