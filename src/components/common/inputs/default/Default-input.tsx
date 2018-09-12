import * as React from 'react';
import './Default-input.scss';

export interface IDefaultInputProps {}

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
      <div className="default-input">
        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
}
