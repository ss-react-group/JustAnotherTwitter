import * as React from 'react';
import { Component } from 'react';
import './App.less';

import TodoList from './mobx/TodoList';
import NewTodo from './mobx/NewTodo';

import { todoState } from './mobx/TodoState';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <NewTodo store={todoState} />
        <TodoList store={todoState} />
      </div>
    );
  }
}

export default App;
