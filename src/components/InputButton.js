import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";

export const InputButton = ({ value, setValue }) => {
  const [on,setOn] = useState(false);
  const [led1,setLed1] = useState(false);
  const [led2,setLed2] = useState(false);
  useEffect(()=>{
    if(on){
      console.log(on)
      setValue(255)
    }else{
      setValue(0)
    }
  },[on])
  return (
    <View style={styles.container}>
      <View style={styles.childCon}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#35A6D6"
          maximumTrackTintColor="#8BCBEF"
          thumbTintColor="#35A6D6"
          value={value}
          onValueChange={(val) => setValue(val)}
        />
      </View>
      <View style={{ height: responsiveHeight(10) }}>
        <TouchableOpacity
          style={styles.fanBtn}
          onPress={() => setOn(!on)}
        >
          <Feather name="power" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: 5,
            fontFamily: "montserrat",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Fan
        </Text>
      </View>
      <View style={styles.switchCon}>
        <View
          style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
        >
          <Switch
            style={{ transform: [{ rotate: "-90deg" }],height:responsiveHeight(10)}}
            trackColor={{ false: "#767577", true: "#805295" }}
            thumbColor={!led1 ? "#f4f3f4" : "#AD16F4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setLed1(!led1)}
            value={led1}
          />
          <Text style={{ color: "white",fontFamily:"montserrat",fontSize:18,fontWeight:"bold" }}>LED1</Text>
        </View>
        <View
          style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
        >
          <Switch
            style={{ transform: [{ rotate: "-90deg" }],height:responsiveHeight(10)}}
            trackColor={{ false: "#767577", true: "#805295" }}
            thumbColor={!led2 ? "#f4f3f4" : "#AD16F4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setLed2(!led2)}
            value={led2}
          />
          <Text style={{ color: "white",fontFamily:"montserrat",fontSize:18,fontWeight:"bold" }}>LED2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
    height: responsiveHeight(40),
    width: responsiveWidth(100),
    flexDirection: "column",
  },
  childCon: {
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: responsiveHeight(10),
  },
  slider: {
    width: responsiveWidth(80),
    height: responsiveHeight(10),
  },
  fanBtn: {
    backgroundColor: "#172DEE",
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnContainer: {
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: responsiveHeight(10),
  },
  switchCon: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: responsiveHeight(20),
    width: responsiveWidth(100),
  },
});
