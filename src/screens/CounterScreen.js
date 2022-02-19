import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNT_AMOUNT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + action.payload };
    case "decrease":
      return { count: state.count - action.payload };
    default:
  }
};

const CounterScreen = function () {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: COUNT_AMOUNT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: COUNT_AMOUNT })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
