import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButttonComp = ({title,onPress} :any) => {
  return (
    <TouchableOpacity style={styles.button_container} activeOpacity={0.8} onPress={onPress}> 
      <Text style={styles.button_text} >{title}</Text>
    </TouchableOpacity >
  )
}

export default ButttonComp
const styles = StyleSheet.create({
    button_container:{
        backgroundColor:"#00A884",
        width:'100%',
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10),
        borderRadius:moderateScale(5),
        alignItems:'center',
    },
    button_text:{
        color:'#fff',
        fontSize:moderateScale(15)
    }
})