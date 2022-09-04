import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import Home from "../pages/Home";
import CriarConta from "../pages/CriarConta";
import Inicio from "../pages/Inicio";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="CriarConta" component={CriarConta}/>
      <Stack.Screen name="Inicio" component={Inicio}/>
    </Stack.Navigator>
  );
}

export default Routes