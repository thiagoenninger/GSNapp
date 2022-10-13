import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tabs from "react-native-tabs";
import { CardPlanta } from "../../components/CardPlanta";
import { ROTINAS } from "../../utils/ListaRotinas";
import styles from "./StylesRotinas";

const MeuJardim = (props) => {
  const { navigate } = useNavigation();
  return (
    <ScrollView horizontal={true} style={{left: 0 }}>
      <View style={{ backgroundColor: "white", }}>
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
          <Text style={styles.textHeader}>Rotinas</Text>
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

        <View style={{ marginTop: 0, marginHorizontal: 0 }}>
          
        </View>
        <View
          style={{
            marginTop: 0,
            marginBottom: 50,
            justifyContent: "center",
            itemsCenter: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <FlatList
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 64 }}
            data={ROTINAS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardPlanta data={item} />}
            horizontal = {false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MeuJardim;