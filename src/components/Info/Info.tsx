import * as React from 'react';

import { Avatar } from '../Avatar';

import './Info.scss';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMap } from '@fortawesome/free-regular-svg-icons';

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
        <div className="container info__grid ">
          <div className="info__description">
            <p>
              {this.props.stores.userDetails.user.description
                ? this.props.stores.userDetails.user.description
                : 'Fill up your description'}
            </p>
          </div>

          <div className="info__details">
            <div className="details-row details-row--location">
              <figure className="details-row__icon">
                <FontAwesomeIcon icon={faMap} />
              </figure>
              <span className="details-row__content">
                {this.props.stores.userDetails.user.location}
              </span>
            </div>
            <div className="details-row details-row--birthday">
              <figure className="details-row__icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </figure>
              <span className="details-row__content">
                {this.props.stores.userDetails.user.birthday}
              </span>
            </div>
          </div>

          <div className="info__avatar">
            <Avatar
              big
              upload={this.props.stores.userDetails.canUpload}
              source={this.props.stores.userDetails.avatar.filePath}
            />
          </div>

          <div className="info__user-name">
            <h3 className="user-name__name">
              {this.props.stores.userDetails.user.firstName}{' '}
              {this.props.stores.userDetails.user.lastName}
            </h3>
          </div>
          </div>
      </div>
    );
  }
}
