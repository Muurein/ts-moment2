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
  priority: number /* 1 ska vara viktigast och 3 minst viktigt*/
}


export class TodoList implements Todo {
  task: string;
  completed: boolean;
  priority: number; /* 1 ska vara viktigast och 3 minst viktigt*/
  todos: Todo[];

  constructor(task: string, completed: boolean, priority: number, todos: Todo[]) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
    this.todos = todos;
    //ska init todos-arrayen SAMT ladda todos från localStorage vid skapandet av ett nytt TodoList-objekt
  }

  addToDo(task: string, priority: number): boolean {
    if (this.task && this.priority === undefined) { /* vad ska jag använda istället? */
      return false;
    } else {
      return true;
    }
  };

  markToDoCompleted(todoIndex: number): void { /* vad ska den här göra exakt? */
    console.log("Metod för att markera todos som klara");
  }
  
  getTodos(): void { //ska var :Todo[]?
    console.log("Metod för för att hämta hela listan av todos");
  }

  savetoLocalStorage(): void {
    console.log("Metod för att spara todos till localStorage");
  }

  loadFromLocalStorage(): void {
    console.log("Metod för att hämta todos från localStorage");
  }

}

//variabler för formuläret
const formEl = document.getElementById("todoList") as HTMLFormElement;
const taskEl = document.getElementById("task") as HTMLInputElement;
const priorityEl = document.getElementById("priority") as HTMLInputElement;
const buttonEl = document.getElementById("submitButton") as HTMLButtonElement;


