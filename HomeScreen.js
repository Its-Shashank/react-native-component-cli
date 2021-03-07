import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Hello from HomeScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default HomeScreen;
