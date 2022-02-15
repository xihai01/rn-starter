import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = function () {
  const name = "My name is Xihai";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
