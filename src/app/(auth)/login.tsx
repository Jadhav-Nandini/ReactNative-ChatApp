import ButttonComp from '@/src/components/atoms/ButttonComp'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'



const Login = () => {

  const [visible, setVisible] = useState(true)
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+ 91");

  const onNextButtonClick = () => {
    router.push('/(auth)/verify_otp')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.headingText}>Enter your phone number</Text>
          <Text style={styles.descriptionText}> WhatsApp will need to verify your phone number. <Text style={styles.link_description}> What's my number ?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity style={styles.dropDown_container} onPress={() => setVisible(true)}>
            <View />
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign
              name="caret-down"
              size={moderateScale(18)}
              color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />

          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>

            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder='Enter your Phone Number'
              />
              <View style={styles.horizontal_line} />
            </View>
          </View>


        </View>
      </View>
      <View style={styles.footer} >
        <ButttonComp title="Next"
          onPress={onNextButtonClick}
          style={{ paddingHorizontal: scale(30) }} />
      </View>



      {visible && (
        <CountryPicker
          visible={true}
          onClose={() => setVisible(false)}
          withFilter
          onSelect={(e: any) => {
            setCountryCode(`+${e.callingCode[0]} `);
            setCountryName(e.name);
          }}
        />
      )}




    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(60),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(40)
  },
  header: {
    gap: moderateScale(30),
  },
  heading_container: {
    gap: verticalScale(20)
  },
  input_main_container: {},
  footer: {},
  headingText: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: '#000',
    textAlign: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#000'

  },
  link_description: {
    color: '#002AC0'
  },
  horizontal_line: {
    width: '100%',
    height: verticalScale(0.5),
    backgroundColor: "#05AA82",
  },
  dropDown_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20)
  },
  dropdown_title: {
    fontWeight: '500',
    color: "#000",
    fontSize: moderateScale(16)
  },
  input_container: {
    // paddingHorizontal: scale(0),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20)
  },
  input: {
    alignItems: 'center',
    fontWeight: '500',
    fontSize: moderateScale(16)

  },
  country_code: {
    gap: verticalScale(20),
  },
  country_code_text: {
    fontWeight: 'bold',
    color: "#000",
    // backgroundColor:'red',
    textAlign: 'center',
    marginTop: verticalScale(8),
    fontSize: moderateScale(16)
  },
})