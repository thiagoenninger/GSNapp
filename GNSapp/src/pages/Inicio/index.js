import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Inicio = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate("Home")} style={styles.btnVoltar}>
        <Text style={{color:"#fff", fontSize:14}}>Voltar</Text>
      </Pressable>
    </View>
  )
}

export default Inicio;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  btnVoltar:{
    backgroundColor: "#32a060",
    width: 125,
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {width: 3, height: 1},
    shadowRadius: 5,
  }
})