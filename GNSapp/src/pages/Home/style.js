import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    width: 260,
    height: 160,
    borderRadius: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#rgba(0,0,0,0.4)",
    width: 260,
    height: 50,
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 0.5,
    marginBottom: 20,
  },
  icons: {
    padding: 10,
    marginLeft: 15,
  },
  btnEsqueciSenha: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#rgba(0,0,0,0.4)",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.5)",
    width: 150,
    height: 30,
    marginBottom: 20,
  },
  txtEsqueciSenha: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
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
    shadowOffset: {width: 3, height: 1},
    shadowRadius: 5,
  },
  txtLogin: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  containerMidiasSociais: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  imagemMidias: {
    padding: 10,
    height: 50,
    width: 50,
    resizeMode: "stretch",
    alignItems: "center",
  },
  containerRegistro: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registro:{
    fontSize: 20,
    fontWeight: "700",
    color: "#32a060",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  }
});

export default styles