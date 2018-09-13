import * as React from 'react';
import './DefaultInput.scss';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../../../interfaces';
import { validateInput } from '../helpers/validation';
import { encrypt } from '../../../../helpers/password-encrypting';

export interface IDefaultInputProps extends IDefaultInput {
  stores?: IStores;
}

export interface IDefaultInputState {
  inputValue: string;
  focused: boolean;
  error: string;
}
@inject('stores')
@observer
export class DefaultInput extends React.Component<
  IDefaultInputProps,
  IDefaultInputState
> {
  constructor(props: IDefaultInputProps) {
    super(props);
    this.state = {
      inputValue: '',
      focused: false,
      error: ''
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

      if (this.props.type === 'password') {
        console.log('password');
        this.setState({
          inputValue: encrypt(this.state.inputValue, 10)
        });
        console.log(this.state.inputValue);
      }
    } else {
      this.setState({
        error: validateInput(this.props.validateFor, this.state.inputValue)
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
          autoComplete="autocomplete"
        />
        <span className="default-input__error">
          {this.state.error.length > 0 ? this.state.error : ''}
        </span>
      </div>
    );
  }
}
