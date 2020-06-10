import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ColourCounter from "./components/ColourCounter";

const COLOUR_INCREMENT = 15;
const reducer = (state, action) => {
  //action means how to change state object
  // state == {red:number ,green:number, blue:number}
  // action == {colourToChange(type): 'red'('change_red') || 'green'("change_green") || 'blue'('change'blue'), amount(payload): 15 || -15}
  switch (
    action.type //never modify the state directly
  ) {
    case "change_red":
      //   return { ...state, red: state.red + action.amount }; //...state means copy paste the original value then modify the copied version
      // ---> if we want to make some constraints =>
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      //   return { ...state, green: state.green + action.anmount }; //...state means copy paste the original value then modify the copied version
      // ---> if we want to make some constraints =>
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      //   return { ...state, blue: state.blue + action.amount }; //...state means copy paste the original value then modify the copied version
      // ---> if we want to make some constraints =>
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); // dispatch means runMyReducer
  const { red, green, blue } = state;
  return (
    <View>
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOUR_INCREMENT })
        }
        colour="Red"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOUR_INCREMENT })
        }
        colour="Blue"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOUR_INCREMENT })
        }
        colour="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
