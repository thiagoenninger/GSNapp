import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import {
  View,
  StatusBar,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AdicionarPlanta = (props) => {
  const { navigate } = useNavigation();
  return (
    
    <View style={{ backgroundColor: "white" }}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#32A060"
      />
      <View
        style={{
          borderBottomColor: "#32A060",
          borderBottomWidth: 2,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 50,
            marginVertical: 12,
          }}
        >
          Adicionar Planta
        </Text>
      </View>
      {/* <FlatList
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
        data={LISTA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListaAdicionarPlanta data={item} />}
        vertical
      /> */}
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Bonsai
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Cacto
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Espada de São Jorge
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Orquídea
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Samambaia
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Suculenta
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#32A060" : "white" },
          styles.btn,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[{ color: pressed ? "white" : "black" }, styles.btnText]}
          >
            Violeta
          </Text>
        )}
      </Pressable>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            paddingHorizontal: 24,
            borderRadius: 4,
            elevation: 3,
            width: 150,
            backgroundColor: "#32A060",
            marginTop: 20,
            marginBottom: 50,
            marginRight: 20,
          }}
          onPress={() => navigate("Home")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "300",
              letterSpacing: 0.25,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            Salvar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AdicionarPlanta;

const styles = StyleSheet.create({
  btnPress: {
    backgroundColor: "transparent",
    borderColor: "#C8C8C8",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnNormal: {
    backgroundColor: "transparent",
    borderColor: "#C8C8C8",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnText: {
    color: "#3E3D3D",
    fontSize: 16,
    fontWeight: "500",
  },
  btn: {
    borderColor: "#C8C8C8",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
  },
});
