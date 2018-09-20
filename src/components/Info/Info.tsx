import * as React from 'react';

import { Avatar } from '../Avatar';

import './Info.scss';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../interfaces';

export interface IInfoProps {
  stores?: IStores;
}

export interface IInfoState {}

@inject('stores')
@observer
export class Info extends React.Component<IInfoProps, IInfoState> {
  constructor(props: IInfoProps) {
    super(props);
  }

  render() {
    return (
      <div className="info">
        <div className="container">
          <div className="info__grid">
            <div className="info__description">
              <p>
                {this.props.stores.userDetails.user.description
                  ? this.props.stores.userDetails.user.description
                  : 'Fill up your description'}
              </p>
            </div>

            <div className="info__avatar">
              <Avatar
                source={this.props.stores.userDetails.avatar.filePath}
                big
                upload={this.props.stores.userDetails.canUpload}
              />
            </div>

            <div className="info__userName">
              <h3 className="userName__name">
                {this.props.stores.userDetails.user.firstName}{' '}
                {this.props.stores.userDetails.user.lastName}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
