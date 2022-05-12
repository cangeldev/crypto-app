import React from 'react'
import { View,Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native"


import style from './style'
import CustomTextInput from '../sharedComponents/customtextinput/customtextinput';
import CustomButton from '../sharedComponents/custombutton/custombutton';
import Or from '../sharedComponents/divider/divider';

function ForgotScreen({navigation}) {
    const [active, setActive] = React.useState(true)

    return (
        <ScrollView
            scrollEnabled={false} style={style.container}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
               
            >
               
               <Image source={require("../assets/images/logo.png")} style={style.image} />

                <CustomTextInput
                    text={"E-mail"}
                    placeholder={"yourmail@example.com"}
                />
                <CustomTextInput
                    text={"Username"}
                    placeholder={"usernamedsds"}
                />
                <CustomButton text={"Submit"}  />
    
                <Or/>
                <TouchableOpacity style={[style.forgotTouch]} onPress={()=>navigation.navigate("LoginScreen")}>
                    <Text style={style.forgotTouchTxt}>
                        Back to Login Screen
                    </Text>
                </TouchableOpacity>
               
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
export default ForgotScreen