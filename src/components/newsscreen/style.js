import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    headerView: {
        flexDirection: "row",
        paddingVertical: "3%",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: colors.blue1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "600",
        color: colors.white
    },

})