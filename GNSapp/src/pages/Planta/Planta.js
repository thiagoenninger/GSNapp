import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Planta = (props) => {
  const { navigate } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("java");
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
      <View
        style={{
          backgroundColor: "#32A060",
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomLeftRadius: 25,
          borderTopLeftRadius: 25,
          marginLeft: 20,
          paddingBottom: 20,
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
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Nome"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: 260,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Feather
            name="droplet"
            size={24}
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Agua"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: 260,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Feather
            name="sun"
            size={24}
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Sol"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: 260,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Feather
            name="calendar"
            size={24}
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Data aquisição"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: 260,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Feather
            name="feather"
            size={24}
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Planta"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: 260,
            borderRadius: 10,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <Feather
            name="file-text"
            size={24}
            color="#fff"
            style={{ padding: 10, marginLeft: 15 }}
          />
          <TextInput
            style={{
              color: "#fff",
              flex: 1,
              marginLeft: 15,
              height: "100%",
              borderColor: "rgba(255,255,255,0.5)",
              borderBottomWidth: 2,
            }}
            placeholder="Descrição"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </View>
  );
};

export default Planta;
