//importerar
import LocalStorage from "./localStorage.ts";
import TodoList from "./classTodoList.ts";
import Todo from "./interfaceTodo.ts";

//variabler för importerade filer
const storage = new LocalStorage();
let todoList = new TodoList([]);

//onlaod
window.onload = () =>  {
  todoList = storage.loadFromLocalStorasge();
  render();
};


//variabler
const taskEl = document.getElementById("task") as HTMLInputElement;
const priorityEl = document.getElementById("priority") as HTMLInputElement;
const buttonEl = document.getElementById("submitButton") as HTMLButtonElement;
let listDivEl = document.getElementById("todoList") as HTMLDivElement;


//lägg in uppgifterna i listan
buttonEl.addEventListener("click", (event): void => {
  event.preventDefault();

  todoList.addToDo(taskEl.value, parseInt(priorityEl.value));
  saveToStorage();
  
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

    //lägg ihop allt
    container.appendChild(taskP);
    container.appendChild(prioP);
    container.appendChild(completedButton);

    listDivEl.appendChild(container);


    //ta bort en uppgift genom att klicka på klar-knappen
    completedButton.addEventListener("click", () => {
      todoList.markToDoCompleted(index);
      saveToStorage();
      render();
    });
  });
}

//ser till att uppgifterna hamnar i prioritetsordning
function saveToStorage() {

  todoList.todos = todoList.todos.sort((a: Todo, b: Todo) => {
    return a.priority - b.priority;
  });
  
  storage.saveToLocalStorage(todoList);
}



