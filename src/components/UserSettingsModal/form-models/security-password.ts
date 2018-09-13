import { IDefaultForm } from './../../common/forms/DefaultForm/DefaultForm.interface';
export const securityPasswordForm: IDefaultForm = {
  formTitle: 'Security - change password',
  inputFields: [
    {
      type: 'password',
      label: 'new password',
      validateFor: 'password'
    }
  ]
};
