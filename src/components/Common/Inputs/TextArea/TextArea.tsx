import * as React from 'react';
import { ITextArea } from '../../../../interfaces/TextArea';
import './TextArea.scss';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../../../interfaces/stores';
import { UserDetailsService } from '../../../../services/user';
import { IUser } from '../../../../interfaces';

export interface ITextAreaProps extends ITextArea {
  stores?: IStores;
}

export interface ITextAreaState {
  charsLength: string;
}

@inject('stores')
@observer
export class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
  constructor(
    props: ITextAreaProps,
    public userDetailsService: UserDetailsService
  ) {
    super(props);
    this.userDetailsService = new UserDetailsService();

    this.state = {
      charsLength: '0'
    };
  }

  handleOnBlue = () => {
    const { id } = this.props.stores.userDetails.user;
    const inputStoreValue = this.props.stores.userDetails.user[
      this.props.dbPropertyKey
    ];

    const newUserDetails = {
      [this.props.dbPropertyKey]: inputStoreValue
    };

    this.userDetailsService
      .updateUserDetails(id, newUserDetails)
      .then(
        (response: IUser) => (this.props.stores.userDetails.user = response)
      );
  };

  handleChange = (event: any) => {
    const { value } = event.target;
    this.props.stores.textareaStore.content = value;
    const charsLength = value.length;

    if (this.props.dbPropertyKey) {
      this.props.stores.userDetails.user[
        this.props.dbPropertyKey
      ] = this.props.stores.textareaStore.content;
    }

    this.setState({
      charsLength
    });
  };

  render() {
    return (
      <div className="text-area">
        <textarea
          className="text-area__input"
          maxLength={parseInt(this.props.maxChars, 10)}
          onChange={this.handleChange}
          onBlur={this.handleOnBlue}
          value={
            this.props.stores.userDetails.user[this.props.dbPropertyKey]
              ? this.props.stores.userDetails.user[this.props.dbPropertyKey]
              : this.props.stores.textareaStore.content
          }
        />
        <span className="text-area__input-chars-counter">
          {this.state.charsLength}/{this.props.maxChars}
        </span>
      </div>
    );
  }
}
