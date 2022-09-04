import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../pages/Home";
import CriarConta from "../pages/CriarConta";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="CriarConta" component={CriarConta}/>
    </Stack.Navigator>
  );
}

export default Routes