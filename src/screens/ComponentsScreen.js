import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>It's me</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.gStyle}>Hello {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  gStyle: {
    fontWeight: "bold",
  },
});
export default ComponentsScreen;
