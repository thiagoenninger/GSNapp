import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Keyboard,
  ListViewBase,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";
import Fundo from "../../assets/fundoCriarConta.png";

const ListaCadastro = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          borderRadius: 10,
          borderColor: "rgba(255,255,255,0.5)",
          borderWidth: 0.5,
          marginBottom: 10,
          padding: 10,
        }}
      >
        <Text style={{ color: "#fff", marginRight:10, fontSize:16 }}>{props.item.id}</Text>
        <Text style={{ color: "#fff", marginRight:10, fontSize:16 }}>{props.item.nome}</Text>
        <Text style={{ color: "#fff", marginRight:10, fontSize:16 }}>{props.item.sobrenome}</Text>
        <Text style={{ color: "#fff", marginRight:10, fontSize:16 }}>{props.item.email}</Text>
        <Feather name="edit" size={20} color="#fff" style={{marginRight:10 }} 
          onPress={() => {props.onEdit(props.item.id)}}/>
        <Feather name="trash" size={20} color="#fff"
          onPress = {() => {props.onDelete(props.item.id)}}/>
      </View>
    </View>
  );
}


export default function CriarConta() {

  const { navigate } = useNavigation();

  const [id, setId] = useState(null);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  //const [confirmarSenha, setConfirmarSenha] = useState("");

  const [lista, setLista] = useState([]);
  const [counter, setCounter] = useState(0);


  function newUser() {
    const tempLista = [...lista];
    if (id === "") {
      tempLista.push({ id: counter, email, nome, sobrenome, senha });
      setCounter(counter + 1);
    } else {
      const indice = procurarPorId(id);
      if(indice != -1){
        tempLista.splice(indice, 1, {id, email, nome, sobrenome, senha});
      }
    }
    setLista(tempLista);
    setId("");
    setEmail("");
    setNome("");
    setSobrenome("");
    setSenha("");
  }

  function procurarPorId(id) {
    for (let i = 0; i < lista.length; i++) {
      const obj = lista[i]
      if (obj.id == id) {
        return i;
      }
    }
    return -1;
  }

  function editUser(id) {
    const indice = procurarPorId(id); 
    if (indice != -1) {
      const obj = lista[indice];
      setId(obj.id);
      setEmail(obj.email);
      setNome(obj.nome);
      setSobrenome(obj.sobrenome);
      setSenha(obj.senha);
    }
  } 

  function deleteUser(id) {
    const indice = procurarPorId(id);
    const tempLista = [...lista];
    tempLista.splice(indice, 1);
    setLista(tempLista);
  }

  

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
              onChangeText={setEmail}
            />
            <Feather name="mail" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Nome"
              placeholderTextColor="#fff"
              value={nome}
              onChangeText={setNome}
            />
            <Feather name="user" size={24} color="#fff" style={styles.imagem} />
          </View>

          <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Sobrenome"
              placeholderTextColor="#fff"
              value={sobrenome}
              onChangeText={setSobrenome}
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
              onChangeText={setSenha}
            />
            <Feather name="lock" size={24} color="#fff" style={styles.imagem} />
          </View>

          {/* <View style={styles.sectionConta}>
            <TextInput
              style={styles.txtInput}
              placeholder="Confirmar Senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
            <Feather
              name="unlock"
              size={24}
              color="#fff"
              style={styles.imagem}
            />
          </View> */}

          <View style={styles.containerBtn}>
            <Pressable
              style={styles.btnRegistro}
              onPress={() => newUser()}
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
        <View style={{flex:3}}>
          <FlatList data={lista}
            renderItem={(props) => <ListaCadastro {...props}
              onEdit={editUser}
              onDelete={deleteUser}
            />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

