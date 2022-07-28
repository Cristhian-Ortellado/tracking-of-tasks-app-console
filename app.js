import {
  inquirerMenu,
  pause,
  readInput,
  listTaskToDelete,
  confirm
} from "./helpers/inquirer.js";
import { saveDb, readDB } from "./helpers/saveFile.js";
import { Tasks } from "./models/tasks.js";

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  //verify if we already have data in our data.json file
  const taskDB = readDB();

  //set the data if this exists
  if (taskDB) tasks.setTasks(taskDB);

  do {
    //infinite loop if the result is distinch of 0
    opt = await inquirerMenu();

    switch (opt) {
      //create task
      case "1":
        const description = await readInput("Enter a description");
        tasks.createTask(description);
        break;

      //list all tasks
      case "2":
        tasks.printAllTasks();
        break;

      //list completed tasks
      case "3":
        tasks.printTaskByStatus();
        break;

      //list pending tasks
      case "4":
        tasks.printTaskByStatus(false);
        break;

      //list tasks to be delete
      case "6":
        const id = await listTaskToDelete(tasks.listArr);
        //confirm delete
        if (id !=='0') {
            const ok = await confirm('Are you sure?');
            if (ok) {
                tasks.deleteTask(id);
            }    
        }
        
        break;

      default:
        break;
    }

    saveDb(tasks.listArr);
    await pause();
  } while (opt !== "0");
};
main();
