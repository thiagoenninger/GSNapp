import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";
import Fundo from "../../assets/fundoCriarConta.png";

const CriarConta = (props) => {

  const { navigate } = useNavigation();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");



  const newUser = async () => {
    try{
      await AsyncStorage.setItem("@email", email, "@nome", nome, "@sobrenome", sobrenome, "@senha", senha);
    } catch (err) {
      console.log(err)
    }
    Keyboard.dismiss()
  }

  // const deleteUser = async () => {
  //   try{
  //     await AsyncStorage.removeItem("@email")
  //     setEmail()
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   Keyboard.dismiss()
  // }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Fundo} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Email"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Feather name="mail" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Nome"
              placeholderTextColor="#fff"
              value={nome}
              onChangeText={value => setNome(value)}
            />
            <Feather name="user" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Sobrenome"
              placeholderTextColor="#fff"
              value={sobrenome}
              onChangeText={value => setSobrenome(value)}
            />
            <Feather name="user" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={senha}
              onChangeText={value => setSenha(value)}
            />
            <Feather name="lock" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Confirmar Senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={value => setConfirmarSenha(value)}
            />
            <Feather
              name="unlock"
              size={24}
              color="#fff"
              style={styles.imagem}
            />
          </View>
          <View style={styles.containerBtn}>
            <Pressable
              style={styles.btnRegistro}
              onPress={newUser}
            >
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
                REGISTRAR
              </Text>
            </Pressable>
            <Pressable
              style={styles.btnCancelar}
              onPress={() => navigate("Home")}
            >
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
                CANCELAR
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CriarConta;
