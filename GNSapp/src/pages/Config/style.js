import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 50,
    marginVertical: 12,
  },
  line:{
    display: "flex",
    alignSelf: "center",
    width: "100%",
    borderBottomColor: "#CBCBCB",
    borderBottomWidth: 2,
    marginVertical: 15,
  },
  categoria:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});

export default styles;