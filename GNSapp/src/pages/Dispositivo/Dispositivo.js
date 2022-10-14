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
import styles from "./style";
import BottomMenu from "../../components/NavMenu"
import Cactos from "../../assets/cactus_sf.png"
import { Feather } from "@expo/vector-icons";

const Dispositivo = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={{flex: 1}}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#32A060"
      />
      <View
        style={{
          borderBottomColor: "#CBCBCB",
          borderBottomWidth: 2,
        }}
      >
        <Text style={styles.textHeader}>Meu Dispositivo</Text>
      </View>
      <View style={styles.containerDispositivo}>
        <Text style={styles.textTitle}>Arduino 01</Text>
        <Text style={styles.textSub}>
          Rotina A
        </Text>
      </View>
      <View style={styles.containerPlanta}>
        <Text style={styles.textPlanta}>Cactos</Text>
        <Image source={Cactos} style={{width: 50, height: 100, marginLeft:30}}/>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerUmidade}>
          <Feather name="droplet" size={60} color="#fff"/>
          <View>
            <Text style={styles.textInfoTexto}>Umidade</Text>
            <Text style={styles.textInfoNum}>50%</Text>
          </View>  
        </View>
        <View style={styles.containerLuz}>
          <Feather name="sun" size={60} color="#fff"/>
          <View>
            <Text style={styles.textInfoTexto}>Umidade</Text>
            <Text style={styles.textInfoNum}>50%</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerStatus}>
        <Text style={{fontSize:16, fontWeight:"500"}}>Status: ativo <Feather name="circle" size={18} color="green"/></Text>
      </View>
    </View>
  );
};

export default Dispositivo;