import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

import Main from "./pages/Main";
import User from "./pages/User";


function Routes() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={ {
                headerStyle: {
                    backgroundColor: '#1159c1',
                },
                headerTintColor: '#fff', } }>
            <Stack.Screen name="Main" component={Main} options={{ title: 'Usuários' }} />
            <Stack.Screen name="User" component={User}  />
        </Stack.Navigator>
    );
}

export default Routes



