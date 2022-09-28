import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import Home from "../pages/Home";
import CriarConta from "../pages/CriarConta";
import MeuJardim from "../pages/MeuJardim/MeuJardim";
import Planta from "../pages/Planta/Planta";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CriarConta" component={CriarConta} />
      <Stack.Screen name="MeuJardim" component={MeuJardim} />
      <Stack.Screen name="Planta" component={Planta} />
    </Stack.Navigator>
  );
};

export default Routes;
