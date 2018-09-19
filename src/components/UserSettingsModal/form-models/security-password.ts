import { IDefaultForm } from '../../../interfaces';

export const securityPasswordForm: IDefaultForm = {
  formTitle: 'Security - change password',
  inputFields: [
    {
      type: 'password',
      label: 'new password',
      validateFor: 'password',
      dbPropertyKey: 'password'
    }
  ]
};
