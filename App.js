import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Homescreen } from "./src/screens/Homescreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    montserrat: require("./assets/Montserrat/Montserrat-VariableFont_wght.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Homescreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10002B",
    alignItems: "center",
    justifyContent: "center",
  },
});
