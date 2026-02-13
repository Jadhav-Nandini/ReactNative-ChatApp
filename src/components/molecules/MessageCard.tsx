import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({name,message,time,count,image}: any) => {
  return (
    <TouchableOpacity style={styles.button}>
        <View style={styles.leftContainer}>
            <Image source={image} style={styles.image} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.time}>{time}</Text>

            {!!count && (

            
            <View style={styles.messageCountContainer}>
                <Text style={styles.messageCount}>{count}</Text>
            </View>
            )}
        </View>
    </TouchableOpacity>
  )
}

export default MessageCard

const styles = StyleSheet.create({
button:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:scale(15),
    paddingVertical:verticalScale(12),
    // backgroundColor:'red'
},
image:{
    height:moderateScale(55),
    width:moderateScale(55),
    borderRadius:scale(55)
},
name:{
    fontWeight:'600',
    fontSize:moderateScale(21),
    color:'black'
},
message:{
    fontSize:moderateScale(13),
    color:"#889095"
},
time:{
    color:'#998E8E',
    fontSize:moderateScale(15),
    fontWeight:'500'
    
},
messageCountContainer:{
    backgroundColor:'#036A01',
    width:moderateScale(23),
    height:moderateScale(23),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:scale(23),
},
messageCount:{
    textAlign:'center',
    color:'white',
    fontSize:moderateScale(12)
},
leftContainer:{
    // justifyContent:'space-between',
    gap:scale(15),
    flexDirection:'row',
    alignItems:'center'
},
rightContainer:{
    alignItems:'flex-end',
    gap:scale(6)
},
})