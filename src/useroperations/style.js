import { StyleSheet } from "react-native"
import colors from "../assets/colors/colors"
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingBottom: 10
    },   
      
     image: {
        width: 130, 
        height: 130,
        borderRadius:100,
        alignSelf:"center",
        marginTop:90

    },
    forgot: {
        marginRight: 15,
        alignItems: "flex-end",
        marginTop: 5,
        alignSelf:"flex-end"
    },
    forgotTxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.blue1,
        textDecorationLine: "underline",
       
    },
    forgotTouch:{      
       alignItems:"center",       
       marginTop:120,
       alignSelf:"center",
        
    },
    forgotTouchTxt:{
        fontSize:18,
        fontWeight:"500",
        color:colors.blue1
    },
    bottomText: {
        fontSize: 16,
        marginRight: 5,
        color:colors.red,
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop:30,
       
    },
    bottomTextLnk: {
        color:colors.blue1,
        fontWeight: "bold",
        textDecorationLine: "underline"
    }

})