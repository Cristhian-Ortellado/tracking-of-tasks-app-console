import inquirer from "inquirer";
import colors from "colors";

const menuOptions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?\n",
    choices: [
      {
        value: "1",
        name: `${"1.".blue} Create task`,
      },
      {
        value: "2",
        name: `${"2.".blue} List all tasks`,
      },
      {
        value: "3",
        name: `${"3.".blue} List completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".blue} List pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".blue} Mark task as complete`,
      },
      {
        value: "6",
        name: `${"6.".blue} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".blue} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==========================================".green);
  console.log("Select an option".white);
  console.log("==========================================".green);
  console.log();
  const { option } = await inquirer.prompt(menuOptions);
  console.log();
  return option;
};

const pause = async () => {
    console.log();
  const { option } = await inquirer.prompt({
    type: "input",
    name: "option",
    message: `Press ${"enter".green} to continue...`,
  });
  return option;
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(val) {
        if (val.length === 0) {
          return "Please enter the required data";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

const listTaskToDelete = async (tasks = []) => {

  const choices = tasks.map((task, i) => {

    const idx = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${idx} ${task.description}`,
    };
  });

  choices.unshift({
    value:'0',
    name: '0.'.green+'Cancel'
  })

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete\n",
      choices
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async(message)=>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

// const showListCheckList = async (tasks)=>{
//     const choices = tasks.map((task, i) => {

//         const idx = `${i + 1}`.green;
    
//         return {
//           value: task.id,
//           name: `${idx} ${task.description}`,
//         };
//       });
    
//       choices.unshift({
//         value:'0',
//         name: '0.'.green+'Cancel'
//       })
    
//       const questions = [
//         {
//           type: "list",
//           name: "id",
//           message: "Delete\n",
//           choices
//         },
//       ];
//       const { id } = await inquirer.prompt(questions);
//       return id;
// }
export { inquirerMenu, pause, readInput, listTaskToDelete , confirm};
