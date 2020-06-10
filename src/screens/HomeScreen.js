import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Ccomponents Demo"
      />
      <Button onPress={() => navigation.navigate("List")} title="Go to List " />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Images"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter"
      />
      <Button
        onPress={() => navigation.navigate("Colour")}
        title="Go To Colours"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Screen"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Screen"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go To List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
