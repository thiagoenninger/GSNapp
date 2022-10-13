
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../pages/Home";
import CriarConta from "../pages/CriarConta";
import MeuJardim from "../pages/MeuJardim/MeuJardim";
import Planta from "../pages/Planta/Planta";
import AdicionarPlanta from "../pages/Planta/AdicionarPlanta";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="CriarConta" component={CriarConta} />
      <Stack.Screen name="MeuJardim" component={MeuJardim} />
      <Stack.Screen name="Planta" component={Planta} />
      <Stack.Screen name="AdicionarPlanta" component={AdicionarPlanta} />
    </Stack.Navigator> 
  );
};

export default Routes;
