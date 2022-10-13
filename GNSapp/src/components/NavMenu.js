import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MeuJardim from '../pages/MeuJardim/MeuJardim';
import Home from '../pages/Home';
import AdicionarPlanta from '../pages/Planta/AdicionarPlanta';
import Planta from '../pages/Planta/Planta';
import CriarConta from '../pages/CriarConta';






const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#32A060',
                tabBarInactiveTintColor: '#CBCBCB',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    height: 40,
                    borderTopWidth: 0,
                    elevation: 0,
                    position: 'absolute',
                
                                        
                    

                },
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
              
            }}
>
        <Tab.Screen name="Home" component={MeuJardim} options={{tabBarIcon: ({focused})=> (
            <View>
                <Image
                    source={require('../assets/meuJardim.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#32A060' : '#CBCBCB',
                    }} />
                    
            </View>
        )}} />
        <Tab.Screen name="Login" component={Home} options={{tabBarIcon: ({focused})=> (
            <View>
                <Image
                    source={require('../assets/rotinas.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#32A060' : '#CBCBCB',
                    }} />

            </View>
        )}} />
        <Tab.Screen name="Planta" component={Planta} options={{tabBarIcon: ({focused})=> (
            <View>
                <Image
                    source={require('../assets/dispositivo.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#32A060' : '#CBCBCB',
                    }} />

            </View>
        )}} />
        <Tab.Screen name="AdicionarPlanta" component={AdicionarPlanta} options={{tabBarIcon: ({focused})=> (
            <View>
                <Image
                    source={require('../assets/settings.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#32A060' : '#CBCBCB',
                    }} />

            </View>
        )}} />
        </Tab.Navigator>
    );
    }



export default Tabs;