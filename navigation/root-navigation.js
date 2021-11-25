import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen,DetailScreen } from "../screens";
import React from "react";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootNavigation= ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Detail" component={DetailScreen}/>
        </Tab.Navigator>
    )
}
export default RootNavigation;