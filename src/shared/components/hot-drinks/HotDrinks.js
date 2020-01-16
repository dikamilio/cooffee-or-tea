import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import {Navigation} from 'react-native-navigation';
import {components} from "../../navigation/component-constants";
import {navigateToOrder} from "../../navigation/navigation";
import ListItem from "./ListItem";

// function useNavigationEvents(handler: (event: NavigationButtonPressedEvent) => void, inputs: any[]) {


const HotDrinks = (props) => {

    const counter = useSelector(state => state.friends.current.length);
    const possible = useSelector(state => state.friends.possible);
    const dispatch = useDispatch();
    return (
        <View style={styles.hotDrinksContainer}>
            <Text>elo {counter} {possible.length}</Text>
            <TouchableOpacity onPress={() => dispatch({type: 'ADD_DRINK'})}>
                <Text>Add2</Text>
            </TouchableOpacity>
            <FlatList data = {possible} renderItem={({item}) => <ListItem drink={item}/>} keyExtractor={item => item.id}/>
        </View>
    )
};

export default HotDrinks;