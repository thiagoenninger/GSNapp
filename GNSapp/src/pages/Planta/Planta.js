import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
  Pressable,
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
            marginBottom: 0,
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
        <ScrollView>
        <View
          style={{
            backgroundColor: "#32A060",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderBottomLeftRadius: 25,
            borderTopLeftRadius: 25,
            marginLeft: 20,
            paddingBottom: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                backgroundColor: "#fff",
                borderRadius: 8,
                marginTop: 0,
                paddingHorizontal: 100,
                paddingVertical: 20,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                shadowOffset: { width: 3, height: 1 },
                elevation: 20,
                shadowRadius: 20,
                marginBottom: 20,
                marginRight: 20,
              }}
            >
              <Image
                source={require("../../assets/cactus_sf.png")}
                style={{ justifyContent: "center", alignItems: "center",}}
              />
            </View>
            <View>
              <Image
                source={require("../../assets/camera.png")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              />
              <Image
                source={require("../../assets/picture.png")}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </View>
          </View>
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
                paddingVertical: 10,
                paddingHorizontal: 24,
                borderRadius: 12,
                elevation: 3,
                backgroundColor: "#fff",
                marginTop: 10,
                borderColor: "#CCCCCC",
                marginBottom: 30,
                marginRight: 20,
              }}
              onPress={() => navigate("MeuJardim")}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "300",
                  letterSpacing: 0.25,
                  color: "#646464",
                  fontWeight: "500",
                }}
              >
                Salvar
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Planta;
