//import
import Todo from './interfaceTodo';

export default class TodoList{
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }
 
  //lägger till uppgiften i listan
  addToDo(task: string, priority: number): boolean {
    if (!this.isValidTodo(task, priority)) {
      return false;
    }

    this.todos.push({task, priority} as Todo);

    return true;
  }

  //tittar om man skriver in 1-3 i priority
  isValidTodo(task: string, priority: number): boolean {
    
    const errorMessageEl = document.getElementById("errorMessage") as HTMLParagraphElement;

    //om båda fälten är tomma
    if (!task || !priority) {
      errorMessageEl.innerHTML = "Alla fält behöver fyllas i";
      return false;
    }

    //om prioritet är fel ifyllt
    if (priority < 1 || priority > 3) {
      errorMessageEl.innerHTML = "Prioritet måste vara 1, 2 eller 3";
      return false;
    }

    errorMessageEl.innerHTML = "";
    return true;
  }

  //tar bort en uppgift från localStorage vid klick på "klar"-knapp
  markToDoCompleted(todoIndex: number): void { 
      this.todos.splice(todoIndex, 1);
  }
}