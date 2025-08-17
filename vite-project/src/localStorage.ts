import TodoList from "./classTodoList.ts";
// import TodoList from "./classTodoList.ts";

export default class LocalStorage{
  key: "tasks";

  save(list: TodoList): void {
    const raw = JSON.stringify(list.todos);
    localStorage.setItem(this.key, raw);
  }

  load(): TodoList {
    const raw = localStorage.getItem(this.key);

    if (!raw) {
      return new TodoList([]);
    }

    // const json = JSON.parse(raw) as { Todo: [] }[];
    const json = JSON.parse(raw) as any[];
    //återskapa todos
    return new TodoList(json);
    //return json.map(p => new TodoList(p));

  }
}