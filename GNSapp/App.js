import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  Pressable,
} from "react-native";

import Mail from "./assets/mail.png";
import Locker from "./assets/locker.png";
import Gmail from "./assets/gmail.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#fff" }}>
            LOGO
          </Text>
        </View>
        <View style={styles.section}>
          <Image source={Mail} style={styles.imagemMail} />
          <TextInput
            style={{ flex: 1, marginLeft: 15 }}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.section}>
          <Image source={Locker} style={styles.imagemLocker} />
          <TextInput
            style={{ flex: 1, marginLeft: 15 }}
            placeholder="Senha"
            underlineColorAndroid="transparent"
          />
        </View>

        <Pressable
          style={styles.btnEsqueciSenha}
          onPress={(_) => alert("Página em construção")}
        >
          <Text style={styles.txtEsqueciSenha}>ESQUECI SENHA</Text>
        </Pressable>

        <Pressable
          style={styles.btnLogin}
          onPress={(_) => alert("Página em construção")}
        >
          <Text style={styles.txtLogin}>LOGIN</Text>
        </Pressable>
        <Text style={{ fontSize: 12, marginBottom: 30 }}>ou acesse com:</Text>
        <View style={styles.containerMidiasSociais}>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Gmail} style={styles.imagemMidias} />
          </Pressable>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Facebook} style={styles.imagemMidias} />
          </Pressable>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Twitter} style={styles.imagemMidias} />
          </Pressable>
        </View>

        <View style={styles.containerRegistro}>
          <Text style={{ fontSize: 18, marginRight: 10 }}>Novo no GSN?</Text>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#32a060" }}
            >
              Registre-se
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    width: 260,
    height: 160,
    backgroundColor: "#c4c4c4",
    borderRadius: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    width: 260,
    height: 50,
    borderRadius: 10,
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
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#000",
    width: 110,
    height: 25,
    marginBottom: 30,
  },
  txtEsqueciSenha: {
    color: "#a0a0a0",
    fontSize: 12,
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
});
