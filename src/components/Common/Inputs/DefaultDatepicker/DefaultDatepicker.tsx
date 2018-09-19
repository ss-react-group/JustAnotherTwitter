import * as React from 'react';
import { IDefaultInput, IStores, IUser } from '../../../../interfaces';
import DatePicker from 'react-datepicker';
import { Moment } from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import './DefaultDatepicker.scss';

import { inject, observer } from 'mobx-react';
import { UserDetailsService } from '../../../../services/user';
export interface IDefaultDatePickerProps extends IDefaultInput {
  stores?: IStores;
}

export interface IDefaultDatePickerState {
  date: Moment;
}

@inject('stores')
@observer
export class DefaultDatePicker extends React.Component<
  IDefaultDatePickerProps,
  IDefaultDatePickerState
> {
  constructor(
    props: IDefaultDatePickerProps,
    public userDetailsService: UserDetailsService
  ) {
    super(props);
    this.userDetailsService = new UserDetailsService();
    this.state = {
      date: null
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

  handleOnChange = (date: any) => {
    const formatedDate = date.format('DD/MM/YYYY');
    this.setState({
      date: formatedDate
    });

    this.props.stores.userDetails.user[this.props.dbPropertyKey] = formatedDate;

    this.updateUserDetails();
  };
  render() {
    return (
      <div className="default-date-picker">
        <figure className="default-date-picker__icon">
          <FontAwesomeIcon icon={faCalendarAlt} className="date-picker-icon" />
          <DatePicker
            onChange={this.handleOnChange}
            className="date-picker-input"
          />
        </figure>

        <span className="default-date-picker__value">
          {this.props.stores.userDetails.user[this.props.dbPropertyKey]}
        </span>
      </div>
    );
  }
}
