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