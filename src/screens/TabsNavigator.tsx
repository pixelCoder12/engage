import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator,BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Icons from '@expo/vector-icons/MaterialIcons'
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigators/RootNavigator';
import PaymentScreen from './PaymentScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';

export type TabStackParamList={
    Home:undefined;
    Cart:undefined;
    Payment:undefined;
    Profile:undefined;
};

const TabsStack=createBottomTabNavigator<TabStackParamList>()

export type TabStackScreenProps<T extends keyof TabStackParamList>=CompositeScreenProps<BottomTabScreenProps<TabStackParamList,T>,RootStackScreenProps<"TabsStack">>

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false,tabBarActiveTintColor:"black"}}>
        <TabsStack.Screen 
        name="Home"
        component={HomeScreen}
         options={{
        tabBarIcon(props){
            return <Icons name="home" {...props}/>
        }
    }} />
        <TabsStack.Screen
        name="Cart" 
        component={CartScreen} 
        options={{
        tabBarIcon(props){
            return <Icons name="shopping-cart" {...props}/>
        }
    }} />
        <TabsStack.Screen 
        name="Payment" 
        component={PaymentScreen} 
        options={{
        tabBarIcon(props){
            return <Icons name="payment" {...props}/>
        }
    }} />
        <TabsStack.Screen
         name="Profile"
         component={ProfileScreen} 
         options={{
        tabBarIcon(props){
            return <Icons name="person" {...props}/>
        }
    }} />
    </TabsStack.Navigator>
  )
}

export default TabsNavigator