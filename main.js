import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "ToDo",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo list?",
            default: false
        }
    ]);
    const { ToDo, addmore } = answers;
    loop = addmore;
    if (ToDo) {
        todos.push(ToDo);
    }
    else {
        console.log("the end");
    }
}
if (todos.length > 0) {
    console.log("Your Todo list:");
}
else {
    console.log("No list found");
}
console.log(todos);
