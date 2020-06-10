// import React, { useState } from "react";
// import { View, Button, StyleSheet, FlatList } from "react-native";

// const ColourScreen = () => {
//   const [colours, setColours] = useState([]);
//   console.log(colours);
//   return (
//     <View>
//       <Button
//         title="Add Colour"
//         onPress={() => {
//           setColours([...colours, randomRgb()]);
//         }}
//       />
//       <FlatList
//         keyExtractor={(item) => item}
//         data={colours}
//         renderItem={({ item }) => {
//           return (
//             <View style={{ height: 100, width: 100, backgroundColor: item }} />
//           );
//         }}
//       />
//     </View>
//   );
// };
// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   //   console.log(`rgb(${red} , ${green}, ${blue})`);
//   return `rgb(${red} , ${green}, ${blue})`;
// };
// const styles = StyleSheet.create({});
// export default ColourScreen;
