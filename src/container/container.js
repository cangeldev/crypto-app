
import React from 'react'
import { View } from "react-native"
import style from './style'
import LoginScreen from '../useroperations/loginscreen'
import SignInScreen from '../useroperations/signinscreen'
import ForgotScreen from '../useroperations/forgotscreen'

import { HomeScreen, OtherScreen } from "../components"
import NewsScreen from "../components/newsScreen"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconM from "react-native-vector-icons/MaterialIcons";
function Container() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TabNavigator' screenOptions={{ headerShown: false }}>
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
                tabBarActiveTintColor: "yellow",
                tabBarInactiveTintColor: 'tomato',
                tabBarLabelStyle: { fontSize: 14, },

            }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen}

                    options={{
                        tabBarLabel: "Anasayfa",
                        tabBarIcon: ({ focused }) =>
                            (<IconM color={focused ? "red" : "green"} name="home" size={30} />),
                    }}
                />
                <Tab.Screen name="NewsScreen" component={NewsScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            (<IconM color={focused ? "red" : "green"} name="insert-chart" size={30} />),
                    }} />
                <Tab.Screen name="OtherScreen" component={OtherScreen}
                    options={{
                        tabBarIcon: ({ focused, color,}) =>
                            (<IconM color={focused ? "red" : "green"} name="horizontal-rule" size={30} />),
                    }} />
            </Tab.Navigator>
        </View>
    )
}
