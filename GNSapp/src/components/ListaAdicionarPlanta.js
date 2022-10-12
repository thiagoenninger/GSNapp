import React from "react";
import { View, TextInput, Pressable, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListaAdicionarPlanta = (props, data) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        itemsCenter: "flex-end",
        flexDirection: "row",
      }}
    >
      <Button
        style={{
          color: "#32A060",
          flex: 1,
          marginLeft: 15,
          height: "100%",
          borderColor: "rgba(255,255,255,0.5)",
          borderBottomWidth: 2,
        }}
        title={data.name}
      />
    </View>
  );
};

export default ListaAdicionarPlanta;
