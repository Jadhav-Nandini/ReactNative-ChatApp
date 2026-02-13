
import Calls from '@/src/components/molecules/Calls';
import Chats from '@/src/components/molecules/Chats';
import Status from '@/src/components/molecules/Status';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const Main = () => {
  const [currentPage, setCurrentPage] = useState('chat');
  const ActivePage = () => {
    switch (currentPage) {
      case 'chat':
        return <Chats />;
      case 'status':
        return <Status />;
      case 'calls':
        return <Calls />;
      default:
        return <Chats />;
    }
  }

  const WhatsAppHeader = () => {
    return (
      <View style={styles.whatsappHeaderStyle}>
        <Text style={styles.whatsappText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="search" 
          style={styles.headerIcon} 
          onPress={()=>{alert('search')}} />
          <Entypo name="dots-three-vertical" 
          style={styles.headerIcon}
          onPress={()=>{alert('dots')}} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar   backgroundColor="yellow" translucent={true}  /> */}
      <WhatsAppHeader />
      <View style={styles.topBarContainer}>

        {
          ['chat', 'status', 'calls'].map((item, index) => {
            return <TouchableOpacity
              key={index}
              onPress={() => setCurrentPage(item)}
              style={[styles.topBarButton, item == currentPage && { borderColor: 'white' }]}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          })
        }
      </View>

      {ActivePage()}
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#008069"
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(12),
    backgroundColor: '#008069',
    gap: scale(10),
    paddingTop: 50,
    width:'100%'

  },
  topBarButton: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#008069',
    paddingBottom: verticalScale(10),
    marginBottom:scale(1.5)
  },
  topBarText: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
  },
  headerIcon: {
    fontSize: moderateScale(22),
    color: 'white',
  },
  whatsappHeaderStyle: {
    backgroundColor: '#008069',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(12),
    paddingTop:10,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap:scale(13)
  },
  whatsappText:{
    fontSize:moderateScale(29),
    color:'white',
    fontWeight:'500'
  },
})