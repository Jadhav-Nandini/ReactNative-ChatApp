import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const MainStack = () => {
  return (
<Stack screenOptions={{headerShown:false}}>
  <Stack.Screen  name="Chat" 
  // options={{headerTitle: 'Chat'}}
  />
</Stack>
  )
}

export default MainStack

const styles = StyleSheet.create({})