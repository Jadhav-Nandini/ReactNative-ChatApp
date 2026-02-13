import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({
    name,
    message,
    time,
    count,
    image,
    logoComponent,
    rightIcon,
    messageLeftIcon,
    onPress
}: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.leftContainer}>
                <View>
                    <Image source={image} style={styles.image} />
                    {logoComponent}
                </View>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.flexRow}>
                        {messageLeftIcon}
                        <Text style={styles.message}>{message}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {time && <Text style={styles.time}>{time}</Text>}

                {!!count && (
                    <View style={styles.messageCountContainer}>
                        <Text style={styles.messageCount}>{count}</Text>
                    </View>
                )}
                {rightIcon}
            </View>
        </TouchableOpacity>
    )
}

export default MessageCard

const styles = StyleSheet.create({
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(12),
        // backgroundColor:'red'
    },
    image: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: scale(60)
    },
    name: {
        fontWeight: '600',
        fontSize: moderateScale(21),
        color: 'black'
    },
    message: {
        fontSize: moderateScale(13.6),
        color: "#889095"
    },
    time: {
        color: '#998E8E',
        fontSize: moderateScale(15),
        fontWeight: '500'

    },
    messageCountContainer: {
        backgroundColor: '#207a58',
        width: moderateScale(23),
        height: moderateScale(23),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(23),
    },
    messageCount: {
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(12)
    },
    leftContainer: {
    
        gap: scale(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        alignItems: 'flex-end',
        gap: scale(6)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems:'center',
        gap: moderateScale(5)
    }
})