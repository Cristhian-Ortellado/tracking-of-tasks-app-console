const { resolve } = require("path");

require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    

    console.log(`${"1 .".green} Create task`);
    console.log(`${"2 .".green} List all tasks`);
    console.log(`${"3 .".green} List completed tasks`);
    console.log(`${"4 .".green} List pending tasks`);
    console.log(`${"5 .".green} Mark task as complete`);
    console.log(`${"6 .".green} Delete task`);
    console.log(`${"0 .".green} Exit`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Select an option: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Press ${"enter".green} to continue...`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
