import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tabs from "react-native-tabs";
import { CardPlanta } from "../../components/CardPlanta.js";
import { LISTA } from "../../utils/ListaPlantas.js";
import styles from "./StylesMeuJardim";
import BottomMenu from "../../components/NavMenu"

const MeuJardim = (props) => {
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
          borderBottomColor: "#CBCBCB",
          borderBottomWidth: 2,
          marginBottom: 30,
        }}
      >
        <Text style={styles.textHeader}>Meu Jardim</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          marginRight: 50,
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
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#32A06080",
          }}
          onPress={() => navigate("AdicionarPlanta")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "300",
              letterSpacing: 0.25,
              color: "#2A2A2A",
            }}
          >
            Adicionar nova planta
          </Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 80, marginHorizontal: 30 }}>
        <Tabs
          style={{
            backgroundColor: "white",
            borderBottomColor: "#CBCBCB",
            borderBottomWidth: 1,
          }}
          selectedStyle={{ color: "black" }}
        >
          <Text name="first" style={{ fontWeight: "500" }}>
            Todas
          </Text>
          <Text
            name="second"
            selectedIconStyle={{ borderTopWidth: 2, borderTopColor: "red" }}
          >
            Outdoor
          </Text>
          <Text name="third">Indoor</Text>
          <Text name="fourth">Frutíferas</Text>
        </Tabs>
      </View>
      <View
        style={{
          marginTop: 15,
          marginBottom: 50,
          justifyContent: "center",
          itemsCenter: "flex-end",
          flexDirection: "row",
        }}
      >
        <FlatList
          contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
          data={LISTA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardPlanta data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MeuJardim;