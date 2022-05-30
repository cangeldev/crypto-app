import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    headerView: {
        paddingTop:7,
        paddingVertical: "2%",
        backgroundColor: colors.blue1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
    },
    textInput: {
        borderRadius: 50,
        backgroundColor: colors.blue4,
        paddingLeft: 14,
        height: 45,
        width: "95%",
        fontSize: 20,
    },
})