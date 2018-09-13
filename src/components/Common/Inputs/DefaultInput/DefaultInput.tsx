import * as React from 'react';
import './DefaultInput.scss';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';

export interface IDefaultInputProps extends IDefaultInput {}

export interface IDefaultInputState {
  inputValue: '';
}

export class DefaultInput extends React.Component<
  IDefaultInputProps,
  IDefaultInputState
> {
  constructor(props: IDefaultInputProps) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (event: any): void => {
    const { value } = event.target;

    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div className={'default-input ' + 'default-input--' + this.props.type}>
        <label htmlFor="">{this.props.label}</label>
        <input
          className={'input input--' + this.props.type}
          type={this.props.type}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
