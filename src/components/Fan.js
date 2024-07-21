import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const Fan = ({ value }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Calculate the duration based on the slider value
    //const duration = 1000 - (value * 4); // Adjust this formula to control speed
    if (value === 0) {
      Animated.timing(animation).stop();
      return;
    }
    Animated.loop(
      Animated.timing(animation, {
        toValue: value,
        duration: 1000,
        useNativeDriver: true,
        easing: (value) => Math.sin(value * Math.PI),
      })
    ).start();
  }, [value]); // Depend on value to restart animation with new duration

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ rotate }],
        },
      ]}
    >
      <Image style={styles.image} source={require("../../assets/fan.png")} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
    height: responsiveHeight(30),
    width: responsiveWidth(100),
  },
  image: {
    width: responsiveHeight(30),
    height: responsiveHeight(30),
  },
});
