import React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Feather as Icon } from '@expo/vector-icons'

import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import Messages from '../screens/Messages';
import User from '../screens/User';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { color } from 'react-native-reanimated';

const Tabs = AnimatedTabBarNavigator();
const {Navigator, Screen} = Tabs;

export default () => (
    <NavigationContainer>
        <Navigator
            initialRouteName={'Home'}
            appearence={{
                floating: false,
                whenActiveShow: 'both',
                horizontalPadding: 10,
                bottomPadding: 10,
                topPadding: 10
            }}
            tabBarOptions={{
                activeTintColor: `${colors.dark}95`,
                inactiveTintColor: colors.secondary,
                activeBackgroundColor: colors.warning,
                tabStyle: {
                    borderRadius: 20,
                    backgroundColor: colors.light
                }, labelStyle: {
                    fontSize: 14,
                    position: 'relative',
                    top: 1,
                    fontFamily: 'Poppins_500Medium'
                }
            }}
        >
            <Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="home" size={24} color={color} focused={focused} />
                )
            }} />
            <Screen name="Favourite" component={Favourite} options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="heart" size={24} color={color} focused={focused} />
                )
            }} />
            <Screen name="Messages" component={Messages} options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="mail" size={24} color={color} focused={focused} />
                )
            }} />
            <Screen name="User" component={User} options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="user" size={24} color={color} focused={focused} />
                )
            }} />
        </Navigator>
    </NavigationContainer>
)  