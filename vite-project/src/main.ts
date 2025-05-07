/*import './styles.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/

/* ------------------------------------------------------------------------------------------------------------ */

/*
  FUNKTIONALITET:
  1. ett formulär för att lägga till nya todos med textfält för uppgift och prio
  2. ett område för att visa en lista över alla todos
  3. en knapp för att markera todos som klara
  4. responsiv design
  5. utökad funktionalitet, säg ta bort todos eller visa datum när de lades till
*/

//lägg in i egen fil
 export interface Todo {
  task: string,
  completed: boolean,
  priority: string/* 1 ska vara viktigast och 3 minst viktigt*/
}

let todos: Todo[] = [];

export class TodoList implements Todo {
  task: string;
  completed: boolean;
  priority: string; /* 1 ska vara viktigast och 3 minst viktigt*/
  //todos: Todo[]; //Todo[]?

  constructor(task: string, completed: boolean, priority: string /*todos: []*/) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
    //this.todos = todos;
    //ska init todos-arrayen SAMT ladda todos från localStorage vid skapandet av ett nytt TodoList-objekt
  }

  addToDo(task: string, priority: string, completed: boolean, todos: []) {
    

    //kollar om användaren skrivit in önskat värde i prioritetsrutan, skriver ut felmeddelande om inte
    if(this.priority !== "1" || "2" || "3") {

      if (this.task && this.priority === undefined) {  
        return false;
      } else {
        //variabler för formuläret
        const formEl = document.getElementById("todoList") as HTMLFormElement;
        const taskEl = document.getElementById("task") as HTMLInputElement;
        const priorityEl = document.getElementById("priority") as HTMLInputElement;
        const buttonEl = document.getElementById("submitButton") as HTMLButtonElement;

        formEl.addEventListener("submit", (event): void => {
          event.preventDefault()
        
          //lägg till ny task från användarens input
          const newTask: TodoList = {
            task: taskEl.value,
            completed: false,
            priority: priorityEl.value,
            /*task: taskEl.value,
            completed: false,
            priority: priorityEl.value,
            todos: todos.push(), *///lägg till i array
          }
          
          todos.push(newTask);
        })
      }
        return true;
    } else {
      const priorityMessageEl = document.getElementById("instruction") as HTMLParagraphElement;

      priorityMessageEl.innerHTML = "Vänligen välj 1, 2 eller 3";
      
    }


  };

  markToDoCompleted(todoIndex: number): void { /* vad ska den här göra exakt? */
    console.log("Metod för att markera todos som klara");
  }
  
  getTodos(): Todo[] { //ska var :Todo[]? är void för arrayen är void?
    console.log("Metod för för att hämta hela listan av todos");
  }

  savetoLocalStorage(): void {
    console.log("Metod för att spara todos till localStorage"); //se föreläsning

    //utility-klass
    class TodoStorage {
      private static key = "todolist";

      //spara arrayen i localStorage
      static save(todos: Todo[]): void {
        const json = JSON.stringify(todos);
        localStorage.setItem(this.key, json);
      }

      //Hämtar arrayen
      static load(): Todo[] {
        const json = localStorage.getItem(this.key);
        if (!json) return [];

        const parsedjson = JSON.parse(json) as {task: string, completed: boolean, priority: string}[];

        //Återskapa todo-objekt
        return parsedjson.map(p => new TodoList(p.task, p.completed, p.priority));
      }

      //rensar localStorage
      static clear(): void {
        localStorage.removeItem(this.key);
      }

    }

  }

  loadFromLocalStorage(): void {
    console.log("Metod för att hämta todos från localStorage");
    /*
      const loadedTodos: Todo[] = TodoStorage.load();
      loadedTodos.forEach(p => p.getTodos/addTodos);
    */

  }

}

//variabler för formuläret
/*const formEl = document.getElementById("todoList") as HTMLFormElement;
const taskEl = document.getElementById("task") as HTMLInputElement;
const priorityEl = document.getElementById("priority") as HTMLInputElement;
const buttonEl = document.getElementById("submitButton") as HTMLButtonElement;*/

//TodoList.addToDo


function construction(): void {
  const divEl = document.getElementById("todoList") as HTMLDivElement;
    
    //divven ska vara tom
    divEl.innerHTML = "";

  todos.forEach((task: string, index: any) => {
    divEl.innerHTML += 
    `
      <label class="label" for=checkbox1></label>
      <input type="checkbox" id="checkbox1" name="checkbox1">
      <p>${this.task}</p>
      <p>Prio: ${this.priority}</p>
    `
  })
}

