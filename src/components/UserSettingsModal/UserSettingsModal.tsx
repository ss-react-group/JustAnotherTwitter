import * as React from 'react';
import './UserSettingsModal.scss';

import { DefaultForm } from '../Common/Forms';

import {
  userDetailsForm,
  securityPasswordForm,
  descriptionForm,
  userLocationForm
} from './form-models';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../interfaces';
import { host } from '../../env';

export interface IUserSettingsModalProps {
  stores?: IStores;
  isOpen: boolean;
  onClick: any;
}

export interface IUserSettingsModalState {}

@inject('stores')
@observer
export class UserSettingsModal extends React.Component<
  IUserSettingsModalProps,
  IUserSettingsModalState
> {
  constructor(props: IUserSettingsModalProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={
          'user-settings-modal ' +
          (this.props.isOpen ? 'user-settings-modal--is-open' : '')
        }
      >
        <div
          className="user-settings-modal__background"
          onClick={this.props.onClick}
        />
        <div className="user-settings-modal__box">
          <figure className="user-settings-modal__avatar">
            <img
              src={host + this.props.stores.assets.avatar.filePath}
              alt=""
              className="avatar__img"
            />
          </figure>
          <div className="box__grid">
            <div className="grid__column">
              <DefaultForm
                formTitle={userDetailsForm.formTitle}
                inputFields={userDetailsForm.inputFields}
              />
              <DefaultForm
                formTitle={securityPasswordForm.formTitle}
                inputFields={securityPasswordForm.inputFields}
              />
            </div>
            <div className="grid__column">
              <DefaultForm
                formTitle={descriptionForm.formTitle}
                inputFields={descriptionForm.inputFields}
              />
              <DefaultForm
                formTitle={userLocationForm.formTitle}
                inputFields={userLocationForm.inputFields}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
