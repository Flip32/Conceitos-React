import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./components/Main/Index";
import User from "./components/User/Index";

const Stack = createStackNavigator()


function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='User' component={User} />
        </Stack.Navigator>
    )
}



export default Routes
