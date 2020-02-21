import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/Main/Index";
import User from "./pages/User/Index";

import DashboardRoutes from './routes/dashboard.routes'

const Stack = createStackNavigator()



function Routes() {
    return (
        <Stack.Navigator initialRouteName="User" screenOptions={ {  headerStyle: Styles.header,
                                                                    headerTintColor: '#fff', } }>
            <Stack.Screen name="Main" component={DashboardRoutes} />
            <Stack.Screen name="User" component={User} options={{ title: 'User' }}/>
        </Stack.Navigator>
    )
}



export default Routes

const Styles = StyleSheet.create({
    header: {
        backgroundColor: "#0159c1",
    }
})
