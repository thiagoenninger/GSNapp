import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 3,
    borderBottomColor: "#32a060",
    width: 280,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  txtInput:{
    marginLeft: 15,
    fontSize: 18,
    color: "#fff",	
  },
  imagem: {
    padding: 10,
    marginRight: 15,
    height: 26,
    width: 26,
    resizeMode: "stretch",
    alignItems: "center",
  },
  btnRegistro: {
    backgroundColor: "#32a060",
    width: 125,
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {width: 3, height: 1},
    shadowRadius: 5,
  },
  btnCancelar:{
      backgroundColor:"#9a9a9a",
      width: 125,
      height: 40,
      borderRadius: 10,
      marginTop: 30,
      marginLeft: 15,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {width: 3, height: 1},
      shadowRadius: 5,
  },
  containerBtn:{
    flexDirection: "row",
    justifyContent: "space-around",
  }
});


export default styles