import React from 'react';
import {View,Text} from 'react-native';
import style from './style'

function Or() {
    return (
        <View style={style.container}>
                <View style={style.containerWrap} />
                <View >
                    <Text style={style.text}>or</Text>
                </View >
                <View style={style.containerWrap} />
            </View>
    )
}

export default Or