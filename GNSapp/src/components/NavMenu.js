import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MeuJardim from '../pages/MeuJardim/MeuJardim';
import Rotinas from '../pages/Rotinas/Rotinas';
import AdicionarPlanta from '../pages/Planta/AdicionarPlanta';
import Planta from '../pages/Planta/Planta';
import Dispositivo from '../pages/Dispositivo/Dispositivo';
import BotaoBot from './BotaoBot';
import Config from '../pages/Config/Config';
import CriarConta from '../pages/CriarConta/index';
import Home from '../pages/Home/index';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (

        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
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

            <Tab.Screen name="MeuJardim" component={MeuJardim} options={{
                tabBarIcon: ({ focused }) => (
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
                )
            }} />
            <Tab.Screen name="Login" component={Rotinas} options={{
                tabBarIcon: ({ focused }) => (
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
                )
            }} />
            <Tab.Screen name="BotaoBot" component={BotaoBot} options={{
                tabBarIcon: ({ focused }) => (
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
                    <BotaoBot />
                ),

            }} />
            <Tab.Screen name="Dispositivo" component={Dispositivo} options={{
                tabBarIcon: ({ focused }) => (
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
                )
            }} />
            <Tab.Screen name="Config" component={Config} options={{
                tabBarIcon: ({ focused }) => (
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
                )
            }} />
            <Tab.Screen name="Planta" component={Planta}
                options={{
                    tabBarButton: () => null,


                }}
            />
            <Tab.Screen name="AdicionarPlanta" component={AdicionarPlanta}
                options={{
                    tabBarButton: () => null,


                }}
            />

            <Tab.Screen name="CriarConta" component={CriarConta}
                options={{
                    tabBarButton: () => null,
                       tabBarStyle: {
                        bottom: -100,
                        backgroundColor: 'rgba(219, 219, 219, 1)',
                        position: 'absolute',
                       },

                }}
            />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarStyle: {
                        bottom: -100,
                        backgroundColor: 'rgba(219, 219, 219, 1)',
                        position: 'absolute',
                        
                    },
                    tabBarButton: () => null,
                    
                }}

            />

        </Tab.Navigator>
    );
}



export default Tabs;