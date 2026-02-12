import ButttonComp from '@/src/components/atoms/ButttonComp'
import { storage } from '@/src/utils/utils'
import OTPInput from '@codsod/react-native-otp-input'
import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Verify_OTP = () => {

  const [otp, setOTP] = useState("");
  const onPress = () => {
    console.log(otp);
    storage.set("access_token","xyz")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrow-left" style={styles.backButton} />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>


      <View style={styles.body}>
        <Text style={styles.otpSendText}>Code has been send to +91 11******04</Text>

        <OTPInput
          length={4}
          onOtpComplete={(txt: string) => setOTP(txt)}
          style={styles.otp_container}
          inputStyle={styles.otpInput}
        />

        <Text style={styles.otpSendText}>Resend Code in <Text style={styles.counterText}>56</Text>s</Text>

      </View>
      <View style={styles.footer}>
        <ButttonComp
          title='Verify'
          onPress={onPress}
          style={styles.verifyButton}
        />
      </View>

      {/* <View ></View> */}
    </SafeAreaView>
  )
}

export default Verify_OTP

const styles = StyleSheet.create({

  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: verticalScale(15)
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
    // backgroundColor:'red'
  },
  backButton: {
    fontSize: moderateScale(24),
    color: '#000',
    fontWeight: 'bold'
  },
  headTitle: {
    fontSize: moderateScale(20),
    color: '#000',
    fontWeight: 'bold'
  },
  body: {
    alignItems: 'center',
    gap: verticalScale(25)
  },
  counterText: {
    color: '#00A884'
  },
  otpSendText: {
    fontSize: moderateScale(15),
    fontWeight: "400"
  },
  resendText: {},
  footer: {},
  verifyButton: {
    borderRadius: moderateScale(30),

  },
  otpInput: {
    borderColor: '#3a3b3a9d',
    // backgroundColor:'#a7a7a73a',
    backgroundColor: 'transparent',
    borderBottomWidth: 1.7,
    // borderRadius:moderateScale(10),
    borderWidth: 0,
    height: verticalScale(50),
    width: scale(46)

  },
  otp_container: {
    gap: scale(5)
  }

})