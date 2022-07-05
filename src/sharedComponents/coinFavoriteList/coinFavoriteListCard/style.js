import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    height: 60,
    marginBottom: 2,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: colors.black,
    width: 140,
    fontWeight: "700",
  },
  changeView: {
    flexDirection: "row",
    alignItems: "center",
    width: 195,
    justifyContent: "space-between",

  },
  changeText: {
    paddingVertical: 8,
    width: 80,
    textAlign: "center",
    color: colors.black,
    fontSize: 17,
    borderRadius: 6,
    fontWeight: "500"
  },
  image: {
    width: 35,
    height: 35,
    backgroundColor: "black",
    borderRadius: 50,
    marginHorizontal: 4
  },

})