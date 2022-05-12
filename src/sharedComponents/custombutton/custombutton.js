import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style'

function CustomButton({ text , ...rest}) {
    return (
        <TouchableOpacity style={style.touchableOpacityStyle}  { ...rest}>
            <Text style={style.touchTextStyle} >{text}</Text>
        </TouchableOpacity>
       

    )
}

export default CustomButton