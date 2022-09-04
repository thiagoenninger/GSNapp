import * as React from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Feather} from '@expo/vector-icons';

import Fundo from "../../assets/fundo2.png";

import Gmail from "../../assets/gmail.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

import styles from "./style";

const Home = (props) => {
  const { navigate } = useNavigation();
  return (
    <ImageBackground source={Fundo} resizeMode="cover" style={styles.container}>
      <StatusBar animated={true}/>
      <View style={styles.containerLogo}>
        <Text style={{ fontSize: 22, fontWeight: "900", color: "#fff" }}>
          LOGO
        </Text>
      </View>
      <View style={styles.section}>
        <TextInput
          style={{ color: "#fff", flex: 1, marginLeft: 15 }}
          placeholder="Email"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
        />
        <Feather name="mail" size={24} color="#fff" style={styles.icons}/>
      </View>
      <View style={styles.section}>
        <TextInput
          style={{ color: "#fff", flex: 1, marginLeft: 15 }}
          placeholder="Senha"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
        />
        <Feather name="lock" size={24} color="#fff" style={styles.icons}/>
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
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          marginBottom: 30,
          textShadowColor: "#000",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3,
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1,
        }}
      >
        ou acesse com:
      </Text>
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
        <Text style={{ color: "#fff", fontSize: 18, marginRight: 10 }}>
          Novo no GSN?
        </Text>
        <Pressable onPress={() => navigate("CriarConta")}>
          <Text style={styles.registro}>Registre-se</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Home;
