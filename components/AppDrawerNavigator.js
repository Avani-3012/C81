import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
//import ItemRequestScreen from '../Screens/ItemRequestScreen'
//import ItemDonateScreen from '../Screens/ItemDonateScreen'
import SettingScreen from '../Screens/SettingScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
   Setting:{
       screen:SettingScreen
   }
},

  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })