import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  Pressable,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tabs from "react-native-tabs";
import styles from "./style";
import BottomMenu from "../../components/NavMenu"
import { Feather } from "@expo/vector-icons";

const Config = (props) => {
  const { navigate } = useNavigation();

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <View style={{flex:1}}>
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
        <Text style={styles.textHeader}>Configurações</Text>
      </View>
      <View style={{padding: 10}}>
        <Pressable style={{display:"flex", flexDirection:"column", marginTop: 15}} onPress={(_) => alert("Página em construção")}>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="globe" size={24} color="gray" />
              <Text style={{fontSize:18, marginLeft:10}}> Idioma </Text>
            </View>
            <Feather name="chevron-right" size={24} color="gray"/>
          </View>
          <View style={styles.line}></View>
        </Pressable>

        <View>
          <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="bell" size={24} color="gray" />
              <Text style={{fontSize:18, marginLeft: 10}}> Notificações Push </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#32A060" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={{alignSelf:"center", color:"gray"}}>Notificações sobre atualização do sistema, promoções e lembretes.</Text>
          <View style={styles.line}></View>
        </View>

        <View>
          <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <Feather name="mail" size={24} color="gray" />
                <Text style={{fontSize:18, marginLeft: 10}}> Notificações por Email </Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#32A060" }}
                thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
            <Text style={{alignSelf:"center", color:"gray"}}>Notificações sobre sua conta, ofertas especiais e pesquisas.</Text>
            <View style={styles.line}></View>
        </View>

        <View style={{display:"flex", flexDirection:"column"}}>

           <Pressable style={styles.categoria}  onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}> 
              <Feather name="coffee" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Meu Plano</Text>
            </View> 
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

           <Pressable style={styles.categoria} onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="lock" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Permitir Acesso</Text>
            </View>  
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

           <Pressable style={styles.categoria} onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="help-circle" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Perguntas Frequentes</Text>
            </View>  
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

           <Pressable style={styles.categoria} onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="info" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Enviar Feedback</Text>
            </View>
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

           <Pressable style={styles.categoria} onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="star" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Avaliar o Aplicativo</Text>
            </View>
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

           <Pressable style={styles.categoria} onPress={(_) => alert("Página em construção")}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <Feather name="shield" size={24} color="gray" />
              <Text style={{marginLeft:10, fontSize:18}}>Política de Privacidade</Text>
            </View>
            <Feather name="chevron-right" size={24} color="gray" />
           </Pressable>

        </View>
      </View>
    </View>
  );
}

export default Config;