import { StyleSheet } from "react-native"
import colors from "../assets/colors/colors"
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    headerView:{
        flexDirection:"row",
        padding:"3%",
        justifyContent:"center",
        alignItems:"center"
    },  
    textInput:{        
        borderRadius:50,
        borderColor:colors.grey1,
        backgroundColor:colors.grey2,
        borderWidth:1,
        paddingLeft:14,
        height:40,
        width:"85%",
        marginRight:15,
        fontSize:18,        
    } ,
    adsView:{
        backgroundColor:"red",
        marginHorizontal:"5%",
        marginTop:8,
        height:"20%",
        borderRadius:14
    }
      
  
})