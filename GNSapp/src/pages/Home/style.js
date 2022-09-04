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
    marginBottom: 30,
  },
  imagemMail: {
    padding: 10,
    marginLeft: 15,
    height: 32,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imagemLocker: {
    padding: 10,
    marginLeft: 15,
    height: 26,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
  },
  btnEsqueciSenha: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#rgba(0,0,0,0.4)",
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.5)",
    width: 130,
    height: 30,
    marginBottom: 30,
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
    width: 260,
    height: 50,
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