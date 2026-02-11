

import imagePath from '@/src/constants/imagePath';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';


const Auth = () => {

  // const [fontLoad] = useFonts({
  //     Inter_400Regular,
  //     Inter_500Medium,
  //     Inter_600SemiBold
  // });


  // console.log(`width value is ${scale(50)} and height value is ${verticalScale(50)}`);


  const [isLoading, setIsLoading] = useState(false)

  let navigate_to_welcome = () => { 
    router.push("/(auth)/terms_agree")
  };

  let loading_timeout = () => {
    setIsLoading(true)
    setTimeout(navigate_to_welcome, 3000)
  }

  useEffect(() => {
    const timeoutId = setTimeout(loading_timeout, 2000)

    return () => clearTimeout(timeoutId)
  }, [])


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>

        {isLoading ?
          (
            <>
              <ActivityIndicator size={moderateScale(35)} color={'#0ccc83'} />
              <Text style={styles.loadingText}>Loading...</Text>
            </>
          ) : (
            <>
              <Text style={[styles.text, { color: '#867373', fontSize: moderateScale(15) }]}>from</Text>
              <Text style={[styles.text, { color: '#000000', fontSize: moderateScale(17), }]}>Facebook</Text>
            </>
          )}


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(55),
  },
  header: {},
  body: {
    alignItems: 'center',
    gap: verticalScale(18)
  },
  footer: {
    alignItems: 'center',
    height: verticalScale(50),
    justifyContent: 'center'
  },
  text: {
    fontWeight: 500
  },
  logo_style: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: 10
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    color: '#000000'
    // fontFamily:'Inter_500Medium',
  },
  loadingText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#034f3f96',
    marginTop: verticalScale(8)
  }
})
export default Auth

