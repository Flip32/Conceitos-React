import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'


function User({ navigation: { navigate} }) {

    return (
        <View style={{flex: 1, backgroundColor: '#cd54ff'}}>
            <Text>
                User
            </Text>
            <View style={Styles.button}>
                <Button title="Go to Main" onPress={() => navigate('Main')}/>
            </View>

        </View>
    )
}

export default User

const Styles = StyleSheet.create({
    button: {
        fontSize: 50,
        marginBottom: 20,
        color: 'green'

    }
})
