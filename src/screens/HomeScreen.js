import React from 'react'
import {Button, Text, View} from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  )
}

export default HomeScreen
