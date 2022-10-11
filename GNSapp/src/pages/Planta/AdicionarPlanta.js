import React from "react";
import { View, StatusBar, FlatList, Text } from "react-native";
import ListaAdicionarPlanta from "../../components/ListaAdicionarPlanta";
import { LISTA } from "../../utils/ListaPlantas";

const AdicionarPlanta = (props) => {
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
            marginVertical: 30,
          }}
        >
          Adicionar Planta
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
        data={LISTA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListaAdicionarPlanta data={item} />}
        vertical
      />
    </View>
  );
};

export default AdicionarPlanta;
