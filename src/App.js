import React, { useEffect } from 'react';
import { View, StatusBar } from "react-native"
import SplashScreen from 'react-native-splash-screen'
import Container from "./container/container"
import SystemNavigationBar from 'react-native-system-navigation-bar';
import colors from './assets/colors/colors';
SystemNavigationBar.setNavigationColor(colors.white);
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.blue1} />
      <Container />
    </View>
  )
}
export default App