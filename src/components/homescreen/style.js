import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    headerView: {
        paddingTop:7,
        flexDirection: "row",
        paddingVertical: "2%",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: colors.blue1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center"
    },
    textInput: {
        borderRadius: 50,
        backgroundColor: colors.blue4,
        paddingLeft: 14,
        height: 45,
        width: "85%",
        marginRight: 15,
        fontSize: 20,
    },
    slider: {
        borderRadius: 14,
        width: '93%',
        marginTop: 8
    }
})