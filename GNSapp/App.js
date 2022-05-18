import React from "react";
import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputDados} placeholder="E-mail" />
        <TextInput style={styles.inputDados} placeholder="Senha" />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  inputDados: {
    width: 260,
    height: 50,
    backgroundColor: "#e8e8e8",
    color: "rgb(60, 59, 59)",
    marginTop: 30,
    borderRadius: 10,
  },
});
