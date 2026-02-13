import imagePath from '@/src/constants/imagePath'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MessageCard from './MessageCard'
const Status = () => {
  const data = [
    {
      image: imagePath.logo,
      name: "Nandini Jadhav",
      message: '2 minutes ago',
    },
    {
      image: imagePath.logo,
      name: "Nandini",
      message: '20 minutes ago',
    
    },
    {
      image: imagePath.logo,
      name: "Jadhav",
      message: 'Yesterday, 11.10 pm',
 
    },
    {
      image: imagePath.logo,
      name: "Abc",
      message: 'Today, 7.00 am',

    },
  ]

  return (
    <View style={{ flex: 1, gap:35, backgroundColor: '#ffffffe1' }}>

      <MessageCard
          name={"xyz"}
          message={'Tap to add status update'}
          image={imagePath.logo}
          logoComponent={<View style={styles.logoComponent}> 
          <Entypo name="plus" size={moderateScale(20)} color="black" />
          </View>}
        />
        <View>

        <Text style={{fontSize:20,marginLeft:29,  color:'#8b8484',marginBottom:10,
        }}>Recent Updates</Text>
      
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard
          name={item?.name}
          image={item?.image}
          message={item?.message}
        />
      }
      } />
        </View>


    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  logoComponent:{
    width:moderateScale(28),
    height:moderateScale(28),
    borderRadius:moderateScale(28),
    borderColor:'black',
    borderWidth:2.5,
    backgroundColor:'#008069',
    position:'absolute',
    bottom:verticalScale(-4),
    right:scale(-3),
    justifyContent:'center',
    alignItems:'center'
  },
})


