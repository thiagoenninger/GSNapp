import * as React from "react";
import { Text, View, TextInput, Image, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Feather} from '@expo/vector-icons';

import styles from './style'
import Fundo from "../../assets/fundoCriarConta.png";	

const CriarConta = (props) => {
  const {navigate} = useNavigation();
  return (
    <ImageBackground source={Fundo} resizeMode="cover" style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Email"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
          <Feather name="mail" size={24} color="#fff" style={styles.imagem}/>
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Nome"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
          <Feather name="user" size={24} color="#fff" style={styles.imagem}/>
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Sobrenome"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
          <Feather name="user" size={24} color="#fff" style={styles.imagem}/>
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Senha"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Feather name="lock" size={24} color="#fff" style={styles.imagem}/>
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Feather name="unlock" size={24} color="#fff" style={styles.imagem}/>
        </View>
        <View style={styles.containerBtn}>
        <Pressable
          style={styles.btnRegistro}
          onPress={() => alert("Registro feito com sucesso!")}
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
  )
}

export default CriarConta