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
function SignInScreen({ navigation }) {
  const [active, setActive] = React.useState(false)
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
          placeholder={"mail@example.com"}
        />
        <CustomTextInput
          text={"Username"}
          placeholder={"your username"}
        />
        <View style={{ position: "relative" }}>
          <CustomTextInput secureTextEntry={!active} />
          <SvgXml width="8%" height="30%" xml={`${active ? EyeIcon : EyehideIcon}`} fill={colors.grey1}
            style={{
              position: "absolute",
              bottom: 10,
              right: "7%"
            }}
            onPress={() => setActive(!active)}
          />
        </View >
        <CustomButton text={"Register"} />
        <Or />
        <View style={style.bottom}>
          <Text style={style.bottomText}>Do you have an account?</Text>
          <TouchableOpacity>
            <Text style={[style.bottomText, style.bottomTextLnk]}
              onPress={() => navigation.navigate('LoginScreen')}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default SignInScreen