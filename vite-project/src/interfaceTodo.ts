export default interface Todo {
  task: string,
  completed: {
    type: boolean,
    optional: true,
    default: false
  },
  priority: number //1 ska vara viktigast och 3 minst viktigt
}