const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "Choose the name of the screen",
      name: "framework",
      default: "HomeScreen",
      // choices: ["react", "react-native", "node"],
    },
  ])
  .then(({ framework }) => {
    const cwd = process.cwd();
    fs.writeFileSync(
      cwd + "/" + framework + ".js",
      `
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
      
function ${framework}() {
  return (
    <View style={styles.screen}>
      <Text>Hello from ${framework}</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
export default ${framework};`
    );
    console.log("Done");
  });
