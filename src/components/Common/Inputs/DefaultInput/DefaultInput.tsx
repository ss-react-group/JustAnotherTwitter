import * as React from 'react';
import { validateInput, IRegExpTestResult } from '../helpers/validation';
import { encrypt } from '../../../../helpers/Encrypting';
import { inject, observer } from 'mobx-react';

import { IStores, IUser } from '../../../../interfaces';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';

import { UserDetailsService } from '../../../../services/user';

import './DefaultInput.scss';

export interface IDefaultInputProps extends IDefaultInput {
  stores?: IStores;
}

export interface IDefaultInputState {
  inputValue: string;
  focused: boolean;
  error: string;
  userNewDetails: string | Int32Array;
}

@inject('stores')
@observer
export class DefaultInput extends React.Component<
  IDefaultInputProps,
  IDefaultInputState
> {
  constructor(
    props: IDefaultInputProps,
    public userDetailsService: UserDetailsService
  ) {
    super(props);

    this.userDetailsService = new UserDetailsService();
    this.state = {
      inputValue: '',
      focused: false,
      error: '',
      userNewDetails: ''
    };
  }

  updateUserDetails = () => {
    const { id } = this.props.stores.userDetails.user;
    const inputStoreValue = this.props.stores.userDetails.user[
      this.props.dbPropertyKey
    ];
    const newUserDetails = {
      [this.props.dbPropertyKey]: inputStoreValue
    };

    this.userDetailsService
      .updateUserDetails(id, newUserDetails)
      .then((response: IUser) => {
        this.props.stores.userDetails.user = response;
      });
  };

  // Change input state;
  handleInputChange = (event: any): void => {
    const { value } = event.target;

    this.props.stores.userDetails.user[this.props.dbPropertyKey] = value;
  };

  // Set status focues for input
  handleOnFocus = () => {
    this.setState({
      focused: true
    });
  };

  // Handle event for blur on input
  handleOnBlur = () => {
    const inputStoreValue = this.props.stores.userDetails.user[
      this.props.dbPropertyKey
    ];
    // Chech if input has lenght
    if (!inputStoreValue.length) {
      this.setState({
        focused: false
      });
    } else {
      // Check if is valid and display an arror
      const inputValidation: IRegExpTestResult = validateInput(
        this.props.validateFor,
        inputStoreValue
      );

      // If inputValidation is Valid
      if (inputValidation.isValid) {
        if (this.props.type === 'password') {
          const encryptedPassword = encrypt(inputStoreValue);
          // @ts-ignore
          this.setState(
            { userNewDetails: encryptedPassword },
            this.updateUserDetails
          );
        } else {
          this.setState(
            {
              userNewDetails: inputStoreValue
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
          (this.props.stores.userDetails.user[this.props.dbPropertyKey]
            ? ' default-input--filled'
            : '')
        }
      >
        <label
          className={
            'default-input__label ' +
            (this.props.stores.userDetails.user[this.props.dbPropertyKey]
              ? 'default-input__label--focused'
              : '')
          }
        >
          {this.props.label}
        </label>
        <input
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          className={'input input--' + this.props.type}
          type={this.props.type}
          value={this.props.stores.userDetails.user[this.props.dbPropertyKey]}
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
