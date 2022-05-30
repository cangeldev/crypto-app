import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"
export default StyleSheet.create({
    container: {
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:10,
     },   
    changeView:{
     flexDirection:"row",    
     alignItems:"center",
     width:190,
     justifyContent:"space-between",
     marginRight:12,
    
    },
    text:{
      fontSize:18,
      marginLeft:15,
      fontWeight:"700"
    }
 
})