import React from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { SvgXml } from 'react-native-svg';
import EyeIcon from "../assets/icons/eye.svg";
import EyehideIcon from "../assets/icons/eyeHide.svg";
import style from './style'
import CustomTextInput from '../sharedComponents/customtextinput/customtextinput';
import CustomButton from '../sharedComponents/custombutton/custombutton';
import Or from '../sharedComponents/divider/divider';
import colors from "../assets/colors/colors"
function LoginScreen({ navigation }) {
    const [active, setActive] = React.useState(true)
    return (
        <ScrollView
            scrollEnabled={false} style={style.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}>               
                <Image source={require("../assets/images/logo.png")} style={style.image}  />
                <CustomTextInput
                    text={"E-mail"}
                    placeholder={"mail@example.com"}
                />
                <View style={{ position: "relative" }}>
                    <CustomTextInput secureTextEntry={active} />
                    <TouchableOpacity style={style.forgot}>
                        <Text style={style.forgotTxt}
                            onPress={() => navigation.navigate("ForgotScreen")}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                    <SvgXml width="8%" height="25%" xml={`${active ? EyehideIcon : EyeIcon}`} fill={colors.grey1}
                        style={{
                            position: "absolute",
                            bottom: 34,
                            right: "7%"
                        }}
                        onPress={() => setActive(!active)}
                    />
                </View >
                <CustomButton text={"Login"} onPress={() => navigation.navigate("TabNavigator")} />
                <Or />
                <View style={[style.bottom, { marginTop: 95 }]}>
                    <Text style={style.bottomText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} >
                        <Text style={[style.bottomText, style.bottomTextLnk]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
export default LoginScreen