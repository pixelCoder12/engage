import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps,createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen'
import TabsNavigator, { TabStackParamList } from '../screens/TabsNavigator'
import { NavigatorScreenParams } from '@react-navigation/native'
import CartScreen from '../screens/CartScreen'

export type RootStackParamList={
    TabsStack:NavigatorScreenParams<TabStackParamList>;
    Details:{
    id:string;
    }
    Cart: undefined;
}

const RootStack=createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =NativeStackScreenProps<RootStackParamList,T>

const RootNavigator = () => {
  return (
   <RootStack.Navigator>
    <RootStack.Screen name="TabsStack" component={TabsNavigator} 
    options={{
        headerShown:false,
    }} />
    <RootStack.Screen name="Details" component={DetailsScreen}
     options={{
        headerShown:false,
    }} />
    <RootStack.Screen name="Cart" component={CartScreen}
     options={{
        headerShown:false,
    }} />
   </RootStack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})