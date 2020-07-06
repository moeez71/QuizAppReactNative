import React from "react"
import { View, Text, Button } from "react-native"

const Start = (props) => {
    return (
        <View>
            <Text>
                Start Screen
            </Text>
            <Button title = "Start Quiz" onPress= {props.onPress}></Button>
        </View>
    )
}
export default Start