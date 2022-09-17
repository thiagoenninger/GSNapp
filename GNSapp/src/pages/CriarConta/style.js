import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionConta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
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