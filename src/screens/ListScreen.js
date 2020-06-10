import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Fahad", age: 20 },
    { name: "Fahad", age: 20 },
    { name: "Fahad", age: 20 },
    { name: "Fahad", age: 20 },
  ];
  return (
    <FlatList
      //   horizontal
      keyExtactor={(friend) => friend.name}
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - He is {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
