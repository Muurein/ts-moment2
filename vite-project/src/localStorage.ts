import TodoList from "./classTodoList.ts";

export default class LocalStorage{
  key!: "tasks";

  //spara till LocalStorage
  saveToLocalStorage(list: TodoList): void {
    const raw = JSON.stringify(list.todos);
    localStorage.setItem(this.key, raw);
  }

  //ladda in från LocalStorage
  loadFromLocalStorasge(): TodoList {
    const raw = localStorage.getItem(this.key);

    if (!raw) {
      return new TodoList([]);
    }
    
    const json = JSON.parse(raw) as any[];

    //återskapa todos
    return new TodoList(json);
  }
}