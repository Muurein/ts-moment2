import Todo from './interfaceTodo'

export default class TodoList{
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
    //this.todos = todos;
    //ska init todos-arrayen SAMT ladda todos från localStorage vid skapandet av ett nytt TodoList-objekt
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
    if (!task || !priority) {
      return false;
    }

    if (priority < 1 || priority > 3) {
      return false;
    }
    return true;
  }

  //tar bort en uppgift från localStorage vid klick på "klar"-knapp
  markToDoCompleted(todoIndex: number): void { /* vad ska den här göra exakt? */
    // console.log("Metod för att markera todos som klara");
    // const finishedButtonEl = document.querySelector("#todoList button") as HTMLButtonElement;
    // //när man i listDivEl klickar på knappen så tar man bort tasken från localStorage
    // finishedButtonEl.addEventListener("click", function(e) {
    //   e.target.remove();
    //});
  }
}