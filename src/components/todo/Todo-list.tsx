import * as React from 'react';
import { Component } from 'react';

import { observer } from 'mobx-react';
import { ObservableTodoStore } from '../../stores/Todo/Todo-state';

interface ITodoListProps {
  store: ObservableTodoStore;
}

interface ITodoListState {
  store: ObservableTodoStore;
}

@observer
class TodoList extends Component<ITodoListProps, ITodoListState> {
  constructor(props: ITodoListProps) {
    super(props);
  }

  render() {
    const { store } = this.props;
    return (
      <div className="todoList">
        {store.report}
        <ul>
          {store.todos.map(todo => (
            <li>{todo.context}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
