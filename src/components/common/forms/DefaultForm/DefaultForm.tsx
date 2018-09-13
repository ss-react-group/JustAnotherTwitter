import * as React from 'react';
import { IDefaultForm } from '../../../../interfaces/DefaultForm';
import { DefaultInput } from '../../inputs';
import { TextArea } from '../../inputs/text-area/TextArea';

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
  render() {
    return (
      <div className="default-form">
        <h3 className="default-form__header">{this.props.formTitle}</h3>
        <form className="default">
          {this.props.inputFields.map(
            inputField =>
              inputField.type !== 'textarea' ? (
                <DefaultInput
                  type={inputField.type}
                  label={inputField.type}
                  validateFor={inputField.validateFor}
                />
              ) : (
                <TextArea maxChars="200" />
              )
          )}
        </form>
      </div>
    );
  }
}
