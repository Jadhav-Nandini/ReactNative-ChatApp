import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const index = () => {
    const [fontLoad] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold
    });
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})