import { IDefaultForm } from '../../../interfaces/DefaultForm';
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
