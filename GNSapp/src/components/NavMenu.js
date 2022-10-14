import * as React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";

import MeuJardim from '../pages/MeuJardim/MeuJardim';
import Rotinas from '../pages/Rotinas/Rotinas';
import Planta from '../pages/Planta/Planta';


// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//     return (
        
//         <Tab.Navigator initialRouteName="Home"
//             screenOptions={{
//                 headerShown: false,
//                 tabBarHideOnKeyboard: true,
//                 tabBarShowLabel: false,
//                 tabBarPosition: 'bottom',
//                 bottom: "always",
//                 tabBarActiveTintColor: '#32A060',
               
                
//                 tabBarStyle: {
//                     backgroundColor: '#FFFFFF',
//                     height: 40,
//                     borderTopWidth: 0.5,
//                     elevation: 0,
//                    position: 'relative',

//                 },
//                 tabBarLabelStyle: {
//                     marginBottom: 5,
//                 },
              
//             }}
// >
//         <Tab.Screen name="Home" component={MeuJardim} options={{tabBarIcon: ({focused})=> (
//             <View>
//                 <Image
//                     source={require('../assets/meuJardim.png')}
//                     resizeMode="contain"
//                     style={{
//                         width: 25,
//                         height: 25,
//                         tintColor: focused ? '#32A060' : '#CBCBCB',
//                     }} />
                    
//             </View>
//         )}} />
//         <Tab.Screen name="Login" component={Rotinas} options={{tabBarIcon: ({focused})=> (
//             <View>
//                 <Image
//                     source={require('../assets/rotinas.png')}
//                     resizeMode="contain"
//                     style={{
//                         width: 25,
//                         height: 25,
//                         tintColor: focused ? '#32A060' : '#CBCBCB',
//                     }} />

//             </View>
//         )}} />
//         <Tab.Screen name="Planta" component={Planta} options={{tabBarIcon: ({focused})=> (
//             <View>
//                 <Image
//                     source={require('../assets/dispositivo.png')}
//                     resizeMode="contain"
//                     style={{
//                         width: 25,
//                         height: 25,
//                         tintColor: focused ? '#32A060' : '#CBCBCB',
//                     }} />

//             </View>
//         )}} />
//         <Tab.Screen name="AdicionarPlanta" component={AdicionarPlanta} options={{tabBarIcon: ({focused})=> (
//             <View>
//                 <Image
//                     source={require('../assets/settings.png')}
//                     resizeMode="contain"
//                     style={{
//                         width: 25,
//                         height: 25,
//                         tintColor: focused ? '#32A060' : '#CBCBCB',
//                     }} />

//             </View>
//         )}} />
//         </Tab.Navigator>
//     );
//     }



// export default Tabs;