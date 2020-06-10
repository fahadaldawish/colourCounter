// import React, { useState } from "react";
import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const reducer = (state, howToChangeState) => {
  //state == {count: number}
  //howToChangeState == {type: 'increment' || 'decrement', payload:1}
  switch (howToChangeState.type) {
    case "increment":
      return { ...state, count: state.count + howToChangeState.payload };
    case "decrement":
      return { ...state, count: state.count - howToChangeState.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  //   const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // {this isthe initial value of count}
  return (
    <View>
      <View style={(style = styles.button)}>
        <Button
          style={styles.button}
          title="Increass"
          //   onPress={() => setCounter(counter + 1)}
          onPress={() => dispatch({ type: "increment", payload: 1 })}
        />
      </View>
      <Button
        title="Decreass"
        //   onPress={() => setCounter(counter - 1)}
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      {/* <Text>Current Count: {counter}</Text> */}
      <Text>Currrent Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
