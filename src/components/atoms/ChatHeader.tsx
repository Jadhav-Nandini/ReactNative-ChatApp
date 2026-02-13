import imagePath from '@/src/constants/imagePath';
import colors from '@/src/styles/colors';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const ChatHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>

            <View style={styles.nameContainer}>
                <Ionicons
                    name="arrow-back-sharp"
                    style={styles.backIcon}
                    onPress={() => router.back()}
                />
                <Image
                    source={imagePath.logo}
                    style={styles.image}
                />
                <Text style={styles.name}>Nandini Jadhav</Text>
            </View>
            <View style={styles.actionButtonContainer}>
       <FontAwesome name="video-camera" size={moderateScale(19)} color="white" />,
        <Ionicons name="call" size={moderateScale(19)} color="white" />,
        <Entypo name="dots-three-vertical" size={moderateScale(19)} color="white" />,

            </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#000000ef'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:12,
    },
    backIcon: {
        fontSize: 24,
        color:colors.white
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    name: {
        fontSize: 21, 
        fontWeight: '500',
        color: colors.white
    },
    mainContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    actionButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:16,
    },
})

export default ChatHeader
