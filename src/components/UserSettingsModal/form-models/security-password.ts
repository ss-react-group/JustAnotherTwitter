import { IDefaultForm } from '../../../interfaces/default-form';
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
