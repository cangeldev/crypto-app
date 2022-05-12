import React, {useEffect} from 'react';
import {View,Text} from "react-native"
import SplashScreen from 'react-native-splash-screen'

import Container from "./container/container"

function App (){

  useEffect(() => {
    SplashScreen.hide();
    }, [])
    
  return(
<View style={{flex:1}}>
  <Container></Container>
</View>
  )
}
export default App