import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 50,
    marginVertical: 12,
  },

});

export default styles;
