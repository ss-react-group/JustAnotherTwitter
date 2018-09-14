import * as React from 'react';

export interface IDatePickerProps {}

export interface IDatePickerState {}

export class DatePicker extends React.Component<
  IDatePickerProps,
  IDatePickerState
> {
  constructor(props: IDatePickerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="default-date-picker">
        <figure className="dafault-date-picker__icon">
          <img src="" alt="" className="icon" />
        </figure>
        <span className="default-date-picker__value">{}</span>
      </div>
    );
  }
}
