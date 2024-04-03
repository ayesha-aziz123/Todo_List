import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["ayesha", "maryam"];
// let condition = true;
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: (chalk.bgCyan("select an Operation ?")),
            choices: ["Add", "update", "View", "delete", "Exit"]
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo1",
                type: "input",
                message: "Add items in the list ?"
            });
            todos.push(addTodo.todo1);
            console.log(todos); //add todo list
        }
        ;
        if (ans.select === "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo2",
                type: "list",
                message: "Update items in the list?",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo1",
                type: "input",
                message: "Add items in the list ?"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo2);
            todos = [...newTodo, addTodo.todo1];
            console.log(todos); ///update todo
        }
        ;
        if (ans.select === "View") {
            console.log(chalk.italic.yellow("*************Todo List************"));
            console.log(todos);
        }
        ; ///view list
        if (ans.select === "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo2",
                type: "list",
                message: "Update items in the list?",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo2);
            todos = [...newTodo];
            console.log(chalk.italic.redBright(todos));
        }
        ;
        if (ans.select === "Exit") {
            console.log(chalk.bgGreenBright("Good By!"));
        }
    } while (true);
}
createTodo(todos);
// interface todoItem {
//     task:string,
//     completed:boolean
// }
// const todoList :todoItem[] = [];
// async function mainMenu() {
//   const {action} = await inquirer.prompt
// (
//     [
//         {
//             name:"action",
//             type:"list",
//             message: "What do you want to do ?",
//             choices:["addTask","ViewList","markasCompleted","deleteList","Exit"]
//         }
//     ]
// );
// switch (action){
//     case "addTask":
//         await addTask();
// break;
//     case "ViewList":
//       await  ViewList();
// break;
//       case "markasCompleted":
//         await markasCompleted();
//  break;
// //       case "deleteList":
// //         await deleteList();
// //  break;
//      case "Exit":
//         console.log(chalk.bgMagenta("Good By !"));
//         return;
// }
// mainMenu()
// };
// let addTask = async () => {
//  let {task} = await inquirer.prompt(
//     {
//         name: "task",
//         type:"input",
//         message:(chalk.bgGreenBright("Enter the Add Task ?"))
//     }
//  )
//    todoList.push ({task,completed :false});
//    console.log(chalk.italic.bgBlueBright("********** Adding Task Successfully *********"));
// };
//    let ViewList = () => {
//     console.log(chalk.gray('******** Todo list ********'));
//     todoList.forEach((item,index ) => {
//         console.log(`${index + 1} [${item.completed  ? 'x' : ''} ${item.task}]`);
//     }
//     )
// console.log('**************');
// };
//     let markasCompleted = async () => {
//         let {index} = await inquirer.prompt(
//             {
//                 name:"index",
//                 type:"number",
//                 message:"Which task do you want to mark as completed ?"
//             }
//         )
//         if(index < 1 || index > todoList.length){
//          console.log('Invalid task Please Try Again !');
//          return  
//         }
//         todoList[index - 1] .completed = true;
//         console.log('Task marked is completed');
//     }
// let deleteList = async () =>{
//     let {item} = await inquirer.prompt(
//         {
//             name :"",
//             type:"number",
//             message:""
//         }
//     )
// }
