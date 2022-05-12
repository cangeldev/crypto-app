import React from 'react';
import { TextInput, View, Text } from 'react-native';
import colors from '../../assets/colors/colors';
import style from './style'

function CustomTextInput({ placeholder = "*********", secureTextEntry, text = "Password" , ...rest }) {
    return (

        <View>
            <Text style={style.text}>{text}</Text>
            <TextInput style={style.inputStyle}
                placeholder={placeholder}
                maxLength={30}
                placeholderTextColor={colors.grey1}
                secureTextEntry={secureTextEntry}  
                {...rest}
               
            />
        </View>
    )
}

export default CustomTextInput