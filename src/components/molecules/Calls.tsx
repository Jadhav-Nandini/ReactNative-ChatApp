import imagePath from '@/src/constants/imagePath';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from './MessageCard';
const Calls = () => {
  const data = [
    {
      image: imagePath.logo,
      name: "xyz",
      message: 'today, 2:00 pm',
        rightIcon:<FontAwesome name="video-camera" size={moderateScale(22)} color="#207a58" />,
        messageLeftIcon:<MaterialIcons name="call-missed" size={24} color="red" />
     
    },
    {
      image: imagePath.logo,
      name: "Nandini",
      message: 'today, 6:00 am',
      rightIcon:<Ionicons name="call" size={moderateScale(22)} color="#207a58" />,
      messageLeftIcon:<MaterialIcons name="call-made" size={22} color="green" />
    
    },
    {
      image: imagePath.logo,
      name: "Jadhav",
      message: 'today, 11:00 pm',
      rightIcon:<FontAwesome name="video-camera" size={moderateScale(22)} color="#207a58" />,
      messageLeftIcon:<MaterialIcons name="call-missed" size={24} color="red" />
     
    },
    {
      image: imagePath.logo,
      name: "Abc",
      message: 'Yesterday, 10:00 am',
      rightIcon:<Ionicons name="call" size={moderateScale(22)} color="#207a58" />,
      messageLeftIcon:<MaterialIcons name="call-made" size={22} color="green" />
     
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffffe1' }}>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard
          name={item?.name}
          image={item?.image}
          message={item?.message}
          rightIcon={item?.rightIcon}
          messageLeftIcon={item?.messageLeftIcon}
        />
      }
      } />

    </View>
  )
}

export default Calls

const styles = StyleSheet.create({})
