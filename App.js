import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import StackNavigator from './src/components/StackNavigator'
import {AuthProvider} from './src/hooks/useAuth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}
