
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import CriarConta from "../pages/CriarConta";
import MeuJardim from "../pages/MeuJardim/MeuJardim";
import Planta from "../pages/Planta/Planta";
import AdicionarPlanta from "../pages/Planta/AdicionarPlanta";
import Dispositivo from "../pages/Dispositivo/Dispositivo";
import Config from "../pages/Config/Config";
import Rotinas from "../pages/Rotinas/Rotinas";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CriarConta" component={CriarConta} />
      <Stack.Screen name="MeuJardim" component={MeuJardim} />
      <Stack.Screen name="Planta" component={Planta} />
      <Stack.Screen name="AdicionarPlanta" component={AdicionarPlanta} />
      <Stack.Screen name="Rotinas" component={Rotinas} />
      <Stack.Screen name="Dispositivo" component={Dispositivo} /> */
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator> 
  );
};

export default Routes;
