import React from 'react'
import { View, Text, Button } from 'react-native'


function Main({ navigation: { navigate } }) {
    return (
        <View style={{flex: 1, backgroundColor: '#ff689f'}}>
            <Text>
                Main
            </Text>
            <Button title="Go to User" onPress={ () => navigate('User', { screen: 'User' })} />
        </View>
    )
}

export default Main
