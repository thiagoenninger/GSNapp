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

  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32a060",
    borderRadius: 10,
    width: 150,
    height: 40,
    marginBottom: 30,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 3, height: 1 },
    shadowRadius: 5,
  },
});

export default styles;
