import ButttonComp from '@/src/components/atoms/ButttonComp'
import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const TermsAgree = () => {
  const onAgree =()=>{
    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to Whatsapp </Text>
        <Image
          source={imagePath.welcome}
          style={styles.img}
          resizeMode='contain'
        />
        <Text style={styles.description_text}>Read our <Text style={styles.link_text}>Privacy Policy.</Text>
          Tap "Agree and continue" to accept the
          <Text style={styles.link_text}> Teams of Service. </Text>
        </Text>
        <View style={{width:moderateScale(250)}}>
        <ButttonComp  title='AGREE AND CONTINUE' onPress={onAgree}  />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

export default TermsAgree

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(50),
    paddingHorizontal: scale(25)
  },
  header: {
    alignItems: 'center',
    gap: verticalScale(30)
  },
  footer: {

    alignItems: 'center',
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373',

  },
  facebook_text: {
    fontSize: moderateScale(14),
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  welcome_text: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: '#000',
    marginBottom:verticalScale(10)
  },
  img: {
    width: moderateScale(240),
    height: moderateScale(240),
    borderRadius: moderateScale(240)
  },
  description_text: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#000',
  },
  link_text: {
    color: '#0C42CC'
  }
})