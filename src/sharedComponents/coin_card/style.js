import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
export default StyleSheet.create({
 container:{
     backgroundColor:colors.red,
     marginLeft:5,
     marginVertical:5,     
     paddingVertical:10,
    borderRadius:7,
    borderBottomEndRadius:15,
    borderTopStartRadius:15,
    width:110

 } , 
 image:{
     width:35,
     height:35,
     backgroundColor:"black",
     borderRadius:50,
     marginHorizontal:4
     
 },
 coinName:{
   fontSize:18,
   marginHorizontal:10,
   fontWeight:"500",
   color:colors.white
 },
 header:{
     flexDirection:"row",
     alignItems:"center",
     
 },
 chance:{
     fontSize:21,
    fontWeight:"500",
    color:colors.white
 },
 price:{
    fontSize:16,
    width:68,
    fontWeight:"500",    
    color:colors.white
 },
 description:{
     flexDirection:"row",
     alignItems:"center",
     width:69,
     justifyContent:"center",
     alignSelf:"center",
     
 }
})