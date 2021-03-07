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
      `import React from 'react'; import {View, StyleSheet} from 'react-native';`
    );
    console.log("Done");
  });
