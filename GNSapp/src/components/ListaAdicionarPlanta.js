import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListaAdicionarPlanta = (props) => {
  return (
    <View
      style={{
        marginTop: 50,
        marginBottom: 50,
        justifyContent: "center",
        itemsCenter: "flex-end",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          width: 260,
          borderRadius: 10,
        }}
      >
        <Feather
          name="bookmark"
          size={24}
          color="#32A060"
          style={{ padding: 10, marginLeft: 15 }}
        />
        <TextInput
          style={{
            color: "#32A060",
            flex: 1,
            marginLeft: 15,
            height: "100%",
            borderColor: "rgba(255,255,255,0.5)",
            borderBottomWidth: 2,
          }}
          placeholder="Nome"
          placeholderTextColor="#32A060"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default ListaAdicionarPlanta;
