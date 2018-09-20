import * as React from 'react';
import { DefaultButton } from '../Common/Button';
import { UserSettingsModal } from '../UserSettingsModal';

export interface IUserSettingsProps {}

export interface IUserSettingsState {
  userSettingModalIsOpen: boolean;
}

export class UserSettings extends React.Component<IUserSettingsProps, IUserSettingsState> {
  constructor(props: IUserSettingsProps) {
    super(props);
    this.state = {
      userSettingModalIsOpen: false
    };
  }

  handleOpenModal = () => {
    this.setState({
      userSettingModalIsOpen: !this.state.userSettingModalIsOpen
    });
  };

  render() {
    return (
      <div className="user-settings">
          <DefaultButton
            handleOnClick={this.handleOpenModal}
            buttonText="Settings"
          />
        <UserSettingsModal
          isOpen={this.state.userSettingModalIsOpen}
          onClick={this.handleOpenModal}
        />
      </div>
    );
  }
}
