import { observable, autorun, computed } from 'mobx';

interface Todo {
  context: string;
  completed: boolean;
  assignee: null;
}

export class ObservableTodoStore {
  @observable
  todos: Todo[];

  constructor() {
    this.todos = [];
    autorun(() => console.log(this.report));
  }

  @computed
  get completedTodosCount() {
    return this.todos.filter((todo: Todo) => todo.completed).length;
  }

  @computed
  get report() {
    if (this.todos.length === 0) return '<none>';
    return `Next todo: ${this.todos[0].context}`;
  }

  addTodo(task: string) {
    this.todos.push({
      context: task,
      completed: false,
      assignee: null
    });
    console.log(this.todos);
  }
}

export const todoState = new ObservableTodoStore();
