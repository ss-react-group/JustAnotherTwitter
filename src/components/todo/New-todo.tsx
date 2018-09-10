import * as React from 'react';
import { Component } from 'react';

import { observer } from 'mobx-react';
import { ObservableTodoStore } from '../../stores/Todo/Todo-state';

interface INewTodoProps {
  store: ObservableTodoStore;
}

interface INewTodoState {
  newTodoValue: string;
}
@observer
class NewTodo extends Component<INewTodoProps, INewTodoState> {
  constructor(props: INewTodoProps) {
    super(props);

    this.state = {
      newTodoValue: ''
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.props.store.addTodo(this.state.newTodoValue);

    this.resetInputField();
  };

  resetInputField = (): void => {
    this.setState({
      newTodoValue: ''
    });
  };

  handleChange = (event: any): void => {
    const { value } = event.target;

    this.setState({
      newTodoValue: value
    });
  };

  render() {
    return (
      <div className="newTodo">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodoValue}
            onChange={this.handleChange}
          />
          <button type="submit">Add new Todo</button>
        </form>
      </div>
    );
  }
}
export default NewTodo;
