
import React from 'react'
import { View } from "react-native"
import style from './style'
import LoginScreen from '../useroperations/loginscreen'
import SignInScreen from '../useroperations/signinscreen'
import ForgotScreen from '../useroperations/forgotscreen'

//import { HomeScreen, OtherScreen } from "../components"
import NewsScreen from "../components/newsscreen/newsScreen"
import HomeScreen from '../components/homescreen/homeScreen'
import OtherScreen from "../components/otherscreen/otherScreen"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconM from "react-native-vector-icons/MaterialIcons";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Fontisto";
import IconL from "react-native-vector-icons/Ionicons";
import colors from '../assets/colors/colors'
function Container() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TabNavigator' screenOptions={{headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Container
function TabNavigator() {
    const Tab = createBottomTabNavigator()
    return (
        <View style={style.container}>

            <Tab.Navigator screenOptions={{
                headerShown: false,
                //  tabBarActiveTintColor: colors.white,
                //tabBarInactiveTintColor: colors.blue4,
                //tabBarLabelStyle: { fontSize: 14, },
                tabBarInactiveBackgroundColor: colors.white,
                tabBarActiveBackgroundColor: colors.white,
                tabBarShowLabel: false

            }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen}

                    options={{
                        tabBarLabel: "Anasayfa",
                        tabBarIcon: ({ focused }) =>
                            (<IconMC color={focused ? colors.blue1 : colors.grey1} name="home-variant" size={30} />),
                    }}
                />
                <Tab.Screen name="NewsScreen" component={NewsScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            (<IconL color={focused ? colors.blue1 : colors.grey1} name="md-newspaper-sharp" size={30} />),
                    }} />
                <Tab.Screen name="OtherScreen" component={OtherScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            (<IconF color={focused ? colors.blue1 : colors.grey1} name="favorite" size={28} />),
                    }} />
            </Tab.Navigator>
        </View>
    )
}
