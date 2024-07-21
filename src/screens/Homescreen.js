import React,{useState} from "react";
import { Text, View } from "react-native";
import { TempHum } from "../components/TempHum";
import { Fan } from "../components/Fan";
import { InputButton } from "../components/InputButton";

export const Homescreen = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <TempHum />
      <Fan value={value} />
      <InputButton value={value} setValue={setValue} />
    </View>
  );
};
