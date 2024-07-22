import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { db } from "../utils/WriteData";
import { ref, onValue } from "firebase/database";

export const TempHum = () => {
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  useEffect(() => {
    const starcountRef = ref(db, "/");
    onValue(starcountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setTemp(data?.test?.temp);
      setHum(data?.test?.hum);
    });
  });
  return (
    <View style={styles.parentcontainer}>
      <View style={styles.childcontainer}>
        <Text style={styles.heading}>Humidity</Text>
        <Text style={styles.text}>{hum?hum:"*"}</Text>
      </View>
      <View style={styles.childcontainer}>
        <Text style={styles.heading}>Temperature</Text>
        <Text style={styles.text}>{temp?temp:"*"}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childcontainer: {
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 0.5,
  },
  parentcontainer: {
    flex: 0.2,
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    flexDirection: "row",
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontFamily: "montserrat",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "montserrat",
    fontWeight: "bold",
  },
});
