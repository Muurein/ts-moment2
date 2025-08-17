import LocalStorage from "./localStorage.ts";
import TodoList from "./classTodoList.ts";
import Todo from "./interfaceTodo.ts";

const storage = new LocalStorage();
let todoList = new TodoList([]);

window.onload = (event) =>  {
  todoList = storage.load();
  render();
console.log('todoList :>> ', todoList);
};
/*
  FUNKTIONALITET:
  1. ett formulär för att lägga till nya todos med textfält för uppgift och prio
  2. ett område för att visa en lista över alla todos
  3. en knapp för att markera todos som klara
  4. responsiv design
  5. utökad funktionalitet, säg ta bort todos eller visa datum när de lades till
*/

//variabler för formuläret

const taskEl = document.getElementById("task") as HTMLInputElement;
const priorityEl = document.getElementById("priority") as HTMLInputElement;
const buttonEl = document.getElementById("submitButton") as HTMLButtonElement;

const formEl = document.getElementById("todoList") as HTMLFormElement;
let listDivEl = document.getElementById("todoList") as HTMLDivElement;


//lägg in uppgifterna i listan
buttonEl.addEventListener("click", (event): void => {
  event.preventDefault();

  todoList.addToDo(taskEl.value, parseInt(priorityEl.value));
  storage.save(todoList);
  
  render();
});


//bestämmer hur uppgifterna ska byggas upp
function render() {
  //"Att göra"-fältet ska var tomt från början
  listDivEl.innerHTML = "";

  //gå igenom arrayen
  todoList.todos.forEach((listItem, index) => {
    
    //skapar de olika elementen
    //div - behållare
    const container = document.createElement("div") as HTMLDivElement;

    //p - uppgiften
    const taskP = document.createElement("p") as HTMLParagraphElement;
    taskP.innerHTML = `<b>Uppgift:</b><br>${listItem.task}`;

    //p - prioritet
    const prioP = document.createElement("p") as HTMLParagraphElement;
    prioP.innerHTML = `<b>Prioritet:</b><br>${listItem.priority}`;

    //button - klar-knappen
    const completedButton = document.createElement("button") as HTMLButtonElement;
    completedButton.textContent = "Klart!";
    completedButton.addEventListener("click", () => {
      console.log("clicked");
      const found = todoList.todos.findIndex(task => task.task === listItem.task);
      console.log('found :>> ', found);
    });

    //lägg ihop allt
    container.appendChild(taskP);
    container.appendChild(prioP);
    container.appendChild(completedButton);

    listDivEl.appendChild(container);

    //ta bort en uppgift genom att klicka på klar-knappen
    completedButton.addEventListener("click", () => {
      container.remove();
      todoList.todos.splice(index, 1); //försvinner bara tillfälligt, komemr tillbaka vid sidomladdning
      console.log("borta");
      console.log(todoList);
      //LADDA OM STORAGE?? för annars kommer de tillbaka när sida nladdas om
    })
  });

}

// //bestämmer hur uppgifterna ska byggas upp
// function render(){
//   //divven ska vara tom
//   listDivEl.innerHTML = "";



//   //gå igenom array med tasks
//   todoList.todos.forEach((listItem, index) => {
//     const completedButtonEl = document.createElement("button") as HTMLButtonElement;
//     completedButtonEl.addEventListener("click", () => {
//          console.log("clicked");
//         const found = todoList.todos.findIndex(((task => {
//         return task.task == listItem.task; 

//       })));
//       console.log('found :>> ', found);
//     });

//     completedButtonEl.textContent = "Klart!"

//     listDivEl.innerHTML += 
//     `
//       <div>
//       <p><b>Uppgift:</b><br>${listItem.task}</p>
//       <p><b>Prio:</b><br>${listItem.priority}</p>
      
//       </div>
//     `
//     listDivEl.appendChild(completedButtonEl);

//     });

//     //ta bort en uppgift
//     // const completedButtonEl = document.querySelector("todoList button") as HTMLButtonElement;
//     // const taskDivEl = document.querySelector("todoList div") as HTMLDivElement;
//     // completedButtonEl.addEventListener("click", () => {
//     //   taskDivEl.remove();
//     //   //LocalStorage.load(); LADDA IN ALLT IGEN
//     //   console.log("removed");
//     // });

//     // completedButtonEl.addEventListener("click", () => {
//     //   const found = todoList.todos.findIndex(((task => {
//     //     return task.task == listItem.task;
//     //   })))
//     // }
    
//     //document.getElementById(`completed-${index}`).onclick = () => { markCompleted(listItem.task) };
    
//     //addEventListener("click", () => { console.log("något händer"); markCompleted(listItem.task) });
  
// }



// //ta bort en färdig uppgift
// function markCompleted(needle: string) {
//   console.log('banan :>> ');

//   const found = todoList.todos.findIndex(((task => {
//     return task.task == needle;
//   })));

//   console.log('found :>> ', found);
// }


// //fullösning för att funktionen ska kallas på/identiferas som använd
// markCompleted("");



