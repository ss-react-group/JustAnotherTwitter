import * as React from 'react';
import { IDefaultForm } from '../../../../interfaces/DefaultForm';
import { DefaultInput, TextArea, DefaultDatePicker } from '../../Inputs';

import './DefaultForm.scss';

export interface IDefaultFormProps extends IDefaultForm {}

export interface IDefaultFormState {}

export class DefaultForm extends React.Component<
  IDefaultFormProps,
  IDefaultFormState
> {
  constructor(props: IDefaultFormProps) {
    super(props);
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="default-form">
        <h3 className="default-form__header">{this.props.formTitle}</h3>
        <form
          className="default-form__body"
          autoComplete="autocomplete"
          onSubmit={this.handleSubmit}
        >
          {this.props.inputFields.map((inputField, index) => {
            console.log(inputField.type);
            switch (inputField.type) {
              case 'textarea':
                return (
                  <TextArea
                    key={index}
                    maxChars="200"
                    dbPropertyKey={inputField.dbPropertyKey}
                  />
                );
              case 'date':
                return (
                  <DefaultDatePicker
                    key={index}
                    label={inputField.label}
                    type={inputField.type}
                    validateFor={inputField.validateFor}
                    dbPropertyKey={inputField.dbPropertyKey}
                  />
                );
              default:
                return (
                  <DefaultInput
                    key={index}
                    dbPropertyKey={inputField.dbPropertyKey}
                    type={inputField.type}
                    label={inputField.label}
                    validateFor={inputField.validateFor}
                  />
                );
            }
          })}
        </form>
      </div>
    );
  }
}
