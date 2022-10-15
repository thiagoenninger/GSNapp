import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MeuJardim from '../pages/MeuJardim/MeuJardim';
import Rotinas from '../pages/Rotinas/Rotinas';
import AdicionarPlanta from '../pages/Planta/AdicionarPlanta';
import Planta from '../pages/Planta/Planta';
import Dispositivo from '../pages/Dispositivo/Dispositivo';
import BotaoBot from './BotaoBot';
import Config from '../pages/Config/Config';
import Dispositivo from '../pages/Dispositivo/Dispositivo';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarPosition: 'bottom',
                bottom: "always",
                tabBarActiveTintColor: '#32A060',
               
                
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    height: 40,
                    borderTopWidth: 0.5,
                    elevation: 0,
                   position: 'absolute',
                   zIndex: 1,

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
        <Tab.Screen name="Login" component={Rotinas} options={{tabBarIcon: ({focused})=> (
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
         <Tab.Screen name="BotaoBot" component={BotaoBot} options={{tabBarIcon: ({focused})=> (
                <Image
                    source={require('../assets/Voice.png')}
                    resizeMode="contain"
                    style={{
                        width: 50,
                        height: 50,
                        tintColor: focused ? '#32A060' : '#CBCBCB',
                    }} 
                    />
                    ),
                tabBarButton: () => (
                    <BotaoBot/>
                ),
                    
        }} />
        <Tab.Screen name="Planta" component={Dispositivo} options={{tabBarIcon: ({focused})=> (
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
        <Tab.Screen name="Config" component={Config} options={{tabBarIcon: ({focused})=> (
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