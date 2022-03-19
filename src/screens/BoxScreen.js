import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOne: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  viewTwo: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    top: 50,
  },
  viewThree: {
    backgroundColor: "purple",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
