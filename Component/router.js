import React,{Component} from 'react';
import {
  View,
  StatusBar,
  Dimensions,
} from 'react-native';

import Home from './Screens/Home.js';
import Discover from './Screens/Discover.js';
import Add from './Screens/Add.js';
import Inbox from './Screens/Inbox.js';
import Me from './Screens/Me.js';

const {width} = Dimensions.get('window');
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
            barStyle={{height:50,width:width,paddingTop:3,paddingBottom:3,backgroundColor:'transparent',position:'absolute',borderWidth:1,borderTopColor:'white'}}
                initialRouteName="Home"
                activeColor="#fff"
                inactiveColor="red"
            >
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name="Discover" component={Discover} />
                <Tab.Screen name="Add" component={Add} />
                <Tab.Screen name="Inbox" component={Inbox} />
                <Tab.Screen name="Me" component={Me} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}