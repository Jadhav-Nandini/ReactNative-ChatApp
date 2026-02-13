import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MessageCard from './MessageCard'

const Chats = () => {

  const onPressFunction = () => {
    router.navigate({
      pathname:'/chat',
    })
  }
  
  const data = [
    {
      image: imagePath.logo,
      name: "Nandini Jadhav",
      message: 'Hello',
      time: '5:27 am',
      messageCount: 1,
      onPress:onPressFunction,
    },
    {
      image: imagePath.logo,
      name: "Nandini",
      message: 'How are you',
      time: '2:20 am',
      messageCount: 0,
      onPress:onPressFunction,

    },
    {
      image: imagePath.logo,
      name: "Jadhav",
      message: 'Bye',
      time: '6:27 am',
      messageCount: 0,
      onPress:onPressFunction,
    },
    {
      image: imagePath.logo,
      name: "Abc",
      message: 'ok',
      time: '6:27 am',
      messageCount: 9,
      onPress:onPressFunction,
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffffe1' }}>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard
          name={item?.name}
          image={item?.image}
          message={item?.message}
          time={item?.time}
          count={item?.messageCount}
          onPress={item?.onPress}

        />
      }
      } />

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({})
