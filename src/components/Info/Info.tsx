import * as React from 'react';

import { Avatar } from '../Avatar';
import { UserSettingsModal } from '../../components/UserSettingsModal';

import './Info.scss';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../interfaces';

export interface IInfoProps {
  stores?: IStores;
}

export interface IInfoState {
  userSettingModalIsOpen: boolean;
}

@inject('stores')
@observer
export class Info extends React.Component<IInfoProps, IInfoState> {
  constructor(props: IInfoProps) {
    super(props);
    this.state = {
      userSettingModalIsOpen: false
    };
  }

  handleUpenModal = () => {
    this.setState({
      userSettingModalIsOpen: !this.state.userSettingModalIsOpen
    });
  };

  render() {
    return (
      <div className="info">
        <div className="container info__grid ">
          <div className="info__description">
            <p>
              {this.props.stores.userDetails.user.description
                ? this.props.stores.userDetails.user.description
                : 'Fill up your description'}
            </p>
          </div>

          <div className="info__details">
            <p>Location</p>
            <p>burthday</p>
          </div>

          <div className="info__avatar">
            <Avatar big upload />
          </div>

          <div className="info__user-name">
            <h3 className="user-name__name">
              {this.props.stores.userDetails.user.firstName}{' '}
              {this.props.stores.userDetails.user.lastName}
            </h3>
          </div>

          <div className="info__user-settings">
            <button
              className="user-setting__button"
              onClick={this.handleUpenModal}
            >
              Settings
            </button>
          </div>
        </div>
        <UserSettingsModal
          isOpen={this.state.userSettingModalIsOpen}
          onClick={this.handleUpenModal}
        />
      </div>
    );
  }
}
