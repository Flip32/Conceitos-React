import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
import { Text } from "react-native";

const Tab = createBottomTabNavigator()

function Wildcard({ title }) {
    return <Text> Wildcard { title }</Text>
}

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={() => <Wildcard title="Home" />} />
            <Tab.Screen name="Settings" component={() => <Wildcard title="Settings" />} />
        </Tab.Navigator>
    )
}

