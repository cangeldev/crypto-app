import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
export default StyleSheet.create({
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor:colors.grey1
    },
    container: {
        marginHorizontal: 15,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{ width: 50, 
        textAlign: 'center', 
        color:colors.grey1,
         fontSize: 20 }
})