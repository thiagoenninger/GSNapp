import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";

import Mail2 from "./assets/mail2.png";
import User from "./assets/user01.png";
import User2 from "./assets/user02.png";
import Senha from "./assets/locker2.png";
import ConfirmSenha from "./assets/locker2Aberto.png";
import Arrow from "./assets/arrow.png";

export default class CriarConta extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            overflow: "hidden",
            paddingBottom: 20,
            width: "100%",
          }}
        >
          <View style={styles.header}>
            <Pressable onPress={(_) => alert("botão em desenvolvimento")}>
              <Image source={Arrow} style={styles.seta} />
            </Pressable>
            <Text style={{ marginBottom: 20, fontSize: 24 }}>
              Crie sua conta
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
          <Image source={Mail2} style={styles.imagem} />
        </View>

        <View style={styles.section}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Nome"
            underlineColorAndroid="transparent"
          />
          <Image source={User} style={styles.imagem} />
        </View>

        <View style={styles.section}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Sobrenome"
            underlineColorAndroid="transparent"
          />
          <Image source={User2} style={styles.imagem} />
        </View>

        <View style={styles.section}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Senha"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={Senha} style={styles.imagem} />
        </View>

        <View style={styles.section}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Confirmar Senha"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={ConfirmSenha} style={styles.imagem} />
        </View>
        <Pressable
          style={styles.btnRegistro}
          onPress={(_) => alert("Usuário registrado com sucesso!")}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
            REGISTRAR
          </Text>
        </Pressable>
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
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    width: "100%",
    height: 60,
    marginBottom: 60,
  },
  seta: {
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    height: 22,
    width: 22,
    resizeMode: "stretch",
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 3,
    borderBottomColor: "#32a060",
    width: 330,
    height: 60,
    borderRadius: 10,
    marginBottom: 30,
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
    width: 330,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
