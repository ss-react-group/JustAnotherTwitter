import * as React from 'react';
import './UserSettingsModal.scss';

import { DefaultForm } from '../common/forms';

import {
  userDetailsForm,
  securityPasswordForm,
  descriptionForm
} from './form-models';

export interface IUserSettingsModalProps {}

export interface IUserSettingsModalState {}

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
      <div className="user-settings-modal">
        <div className="user-settings-modal__box">
          <figure className="user-settings-modal__avatar">
            <img
              src="https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
