import * as React from "react";
import { Text, View, TextInput, Image, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Mail from "../../assets/mail.png";
import User from "../../assets/user01.png";
import User2 from "../../assets/user02.png";
import Senha from "../../assets/locker.png";
import ConfirmSenha from "../../assets/locker2Aberto.png";

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
          <Image source={Mail} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Nome"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
          <Image source={User} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Sobrenome"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
          <Image source={User2} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Senha"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={Senha} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={styles.txtInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={ConfirmSenha} style={styles.imagem} />
        </View>
        <View style={styles.containerBtn}>
        <Pressable
          style={styles.btnRegistro}
          onPress={() => navigate("Home")}
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