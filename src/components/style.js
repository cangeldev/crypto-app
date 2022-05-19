import { StyleSheet } from "react-native"
import colors from "../assets/colors/colors"
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    headerView:{
        flexDirection:"row",
        paddingVertical:"3%",
        paddingHorizontal:15,
        justifyContent:"space-between",
        backgroundColor:colors.blue3,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems:"center"
    },  
    textInput:{        
        borderRadius:50,        
        backgroundColor:colors.blue4,       
        paddingLeft:14,
        height:45,
        width:"85%",
        marginRight:15,
        fontSize:20,
    } ,
    adsView:{
        backgroundColor:"red",
        marginHorizontal:"5%",
        marginTop:8,
        height:"20%",
        borderRadius:14
    },
    headerTitle:{
        fontSize:25,
        fontWeight:"600",      
        color:colors.white    
    },     
  
})