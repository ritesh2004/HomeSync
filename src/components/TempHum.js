import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export const TempHum = () => {
  return (
    <View style={styles.parentcontainer}>
        <View style={styles.childcontainer}>
            <Text style={styles.heading}>Humidity</Text>
            <Text style={styles.text}>56</Text>
        </View>
        <View style={styles.childcontainer}>
            <Text style={styles.heading}>Temperature</Text>
            <Text style={styles.text}>36°C</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    childcontainer : {
        backgroundColor: '#10002B',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        flex : 0.5,
    },
    parentcontainer : {
        flex: 0.2,
        backgroundColor: '#10002B',
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(20),
        width: responsiveWidth(100),
        flexDirection: "row",
    },
    heading : {
        color: 'white',
        fontSize: 20,
        fontFamily: 'montserrat'
    },
    text : {
        color: 'white',
        fontSize: 20,
        fontFamily: 'montserrat',
        fontWeight: 'bold'
    }
})
