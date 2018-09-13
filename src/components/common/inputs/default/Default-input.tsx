import * as React from 'react';
import './Default-input.scss';
import { IDefaultInput } from './Default-input.interface';

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
        <input type={this.props.type} onChange={this.handleInputChange} />
      </div>
    );
  }
}
