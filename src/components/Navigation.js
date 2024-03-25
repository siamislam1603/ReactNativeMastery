import {Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import Feed from '../screens/tabScreens/Feed'
import Notifications from '../screens/tabScreens/Notifications'
import Settings from '../screens/tabScreens/Settings'

const Tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({size, color, focused}) => {
          let iconName
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#1da1f2',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container]}>
        <TabGroup />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
