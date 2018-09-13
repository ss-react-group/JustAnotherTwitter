import * as React from 'react';
import './DefaultInput.scss';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';

export interface IDefaultInputProps extends IDefaultInput {}

export interface IDefaultInputState {
  inputValue: string;
  focused: boolean;
}

export class DefaultInput extends React.Component<
  IDefaultInputProps,
  IDefaultInputState
> {
  constructor(props: IDefaultInputProps) {
    super(props);
    this.state = {
      inputValue: '',
      focused: false
    };
  }

  handleInputChange = (event: any): void => {
    const { value } = event.target;

    this.setState({
      inputValue: value
    });
  };

  handleOnFocus = () => {
    this.setState({
      focused: true
    });
  };

  handleOnBlur = () => {
    if (!this.state.inputValue.length) {
      this.setState({
        focused: false
      });
    }
  };

  render() {
    return (
      <div
        className={
          'default-input ' +
          'default-input--' +
          this.props.type +
          (this.state.inputValue.length > 0 ? ' default-input--filled' : '')
        }
      >
        <label
          className={
            'default-input__label ' +
            (this.state.focused ? 'default-input__label--focused' : '')
          }
        >
          {this.props.label}
        </label>
        <input
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          className={'input input--' + this.props.type}
          type={this.props.type}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
