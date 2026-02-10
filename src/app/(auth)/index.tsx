import imagePath from '@/src/constants/imagePath';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';


const Auth = () => {
  return (
    // <View style={{margin:40}}>
    //   <Text>Auth</Text>
    //   <Link href={'/login'} >Login</Link>
    // </View>
    <SafeAreaView style={styles.container}>
    <View style={styles.header}></View>
    <View style={styles.body}>
      <Image source={imagePath.logo} style={styles.logo_style} />
    </View>
    <View style={styles.footer}>
      <Text style={[styles.text, {color:'#867373', fontSize:14}]}>from</Text>
      <Text style={[styles.text, {color:'#000000',fontSize:17,}]}>Facebook</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:70,
  },
  header:{},
  body:{},
  footer:{
    alignItems:'center',
  },
  text:{
 fontWeight:500
  },
  logo_style:{
    width:scale(60),
    height:scale(60),
    // width:50,
    // height:50,
    borderRadius:10

  }
})
export default Auth

