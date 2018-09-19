import * as React from 'react';
import './DefaultInput.scss';
import { IDefaultInput } from '../../../../interfaces/DefaultInput';
import { validateInput, IRegExpTestResult } from '../helpers/validation';
import { encrypt } from '../../../../helpers/Encrypting';
import { Fetch } from '../../../../helpers/fetch';
import { env } from '../../../../env';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../../../interfaces';

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
      env.securedRoutes + '/user/' + this.props.stores.userDetails.user.id,
      'json',
      {
        method: 'PATCH',
        body: JSON.stringify(newUserDetails)
      }
    );

    updateUserPromise.then(response => {
      this.props.stores.userDetails.user = response.updatedUser;
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
    const userProperty = this.props.stores.userDetails.user[
      this.props.dbPropertyKey
    ];
    // Chech if input has lenght
    if (!userProperty.length) {
      this.setState({
        focused: false
      });
    } else {
      // Check if is valid and display an arror
      const inputValidation: IRegExpTestResult = validateInput(
        this.props.validateFor,
        userProperty
      );

      // If inputValidation is Valid
      if (inputValidation.isValid) {
        if (this.props.type === 'password') {
          const encryptedPassword = encrypt(userProperty);
          // @ts-ignore
          this.setState(
            { userNewDetails: encryptedPassword },
            this.updateUserDetails
          );
        } else {
          this.setState(
            {
              userNewDetails: userProperty
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
