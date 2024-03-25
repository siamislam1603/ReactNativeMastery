import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useLayoutEffect} from 'react'
import {View} from 'react-native'
import TweetContent from '../../components/TweetContent'

const TweetDetailScreen = () => {
  const {params} = useRoute()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    })
  }, [])
  return (
    <View style={{flex: 1}}>
      <TweetContent tweet={params.tweet} />
    </View>
  )
}

export default TweetDetailScreen
