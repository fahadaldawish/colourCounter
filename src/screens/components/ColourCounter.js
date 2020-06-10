import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button onPress={() => onIncrease()} title={`Incease ${colour} `} />
      <Button onPress={() => onDecrease()} title={`Decease ${colour}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourCounter;
