import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"
export default StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        borderRadius: 12,
        height: 130,
        marginHorizontal: 5,
        overflow: "hidden",
        marginTop: 5,
        flexDirection: "row"
    },
    content: {
        flex: 5,
        padding: 7,
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: colors.black,
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    author: {
        fontSize: 15,
        fontWeight: "700",
        width: 150,

    },
    credate: {
        fontSize: 15,
        fontWeight: "700",
        color: colors.black,
    },
    image: {
        height: "78%",
        alignSelf: "center",
        flex: 2.5,
        resizeMode: "stretch",
        borderRadius: 20,
        margin: 5,
        marginLeft: 10
    },
})