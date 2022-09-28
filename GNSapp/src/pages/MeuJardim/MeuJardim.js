import * as React from "react";
import { Text, View, StatusBar, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tabs from "react-native-tabs";

import styles from "./StylesMeuJardim";

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
          onPress={() => navigate("Planta")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "300",
              letterSpacing: 0.25,
              color: "#A0A0A0",
            }}
          >
            Adicionar
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
          marginTop: 50,
          marginBottom: 50,
          justifyContent: "center",
          itemsCenter: "flex-end",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#32A060",
            width: 250,
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 25,
            marginRight: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../../assets/cactus_sf.png")} />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 10,
              // marginRight: 100,
              marginTop: 30,
            }}
          >
            Planta A
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Espaço para infos básicas desta planta
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MeuJardim;
