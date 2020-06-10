import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
  },
  textOneStyle: {
    borderColor: "red",
    borderWidth: 2,
    // margin: 20,
    flex: 1,
  },
  textTwoStyle: {
    borderColor: "red",
    borderWidth: 2,
    // margin: 20,
    flex: 4,
  },
  textThreeStyle: {
    borderColor: "red",
    borderWidth: 2,
    // margin: 20,
    flex: 2,
  },
});

export default BoxScreen;
