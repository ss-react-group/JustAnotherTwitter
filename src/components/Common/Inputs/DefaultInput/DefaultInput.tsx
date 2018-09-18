import * as React from 'react';
import './DefaultInput.scss';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';
import { validateInput, IRegExpTestResult } from '../helpers/validation';
import { encrypt } from '../../../../helpers/Encrypting';
import { Fetch } from '../../../../helpers/fetch';
import { env } from '../../../../env/environment';

export interface IDefaultInputProps extends IDefaultInput {}

export interface IDefaultInputState {
  inputValue: string;
  focused: boolean;
  error: string;
  userNewDetails: string | Int32Array;
}

export class DefaultInput extends React.Component<
  IDefaultInputProps,
  IDefaultInputState
> {
  constructor(props: IDefaultInputProps) {
    super(props);
    this.state = {
      inputValue: '',
      focused: false,
      error: '',
      userNewDetails: ''
    };
  }

  updateUserDetails = () => {
    const newUserDetails = {
      [this.props.dbPropertyKey]: this.state.userNewDetails
    };

    const updateUserPromise = Fetch.request(
      env.securedRoutes + '/user/' + 1,
      'json',
      {
        method: 'PATCH',
        body: JSON.stringify(newUserDetails)
      }
    );

    updateUserPromise.then(response => console.log(response));
  };

  // Change input state;
  handleInputChange = (event: any): void => {
    const { value } = event.target;

    this.setState({
      inputValue: value
    });
  };

  // Set status focues for input
  handleOnFocus = () => {
    this.setState({
      focused: true
    });
  };

  // Handle event for blur on input
  handleOnBlur = () => {
    // Chech if input has lenght
    if (!this.state.inputValue.length) {
      this.setState({
        focused: false
      });
    } else {
      // Check if is valid and display an arror
      const inputValidation: IRegExpTestResult = validateInput(
        this.props.validateFor,
        this.state.inputValue
      );

      // If inputValidation is Valid
      if (inputValidation.isValid) {
        if (this.props.type === 'password') {
          const encryptedPassword = encrypt(this.state.inputValue);
          // @ts-ignore
          this.setState(
            { userNewDetails: encryptedPassword },
            this.updateUserDetails
          );
        } else {
          this.setState(
            {
              userNewDetails: this.state.inputValue
            },
            this.updateUserDetails
          );
        }
      } else {
        this.setState({
          error: inputValidation.error
        });
      }
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
