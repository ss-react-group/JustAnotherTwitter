import { IDefaultForm } from '../../../interfaces/default-form';
export const userDetailsForm: IDefaultForm = {
  formTitle: 'User Details',
  inputFields: [
    {
      type: 'text',
      label: 'email',
      validateFor: 'email'
    },
    {
      type: 'text',
      label: 'first name',
      validateFor: 'none'
    },
    {
      type: 'text',
      label: 'last name',
      validateFor: 'none'
    },
    {
      type: 'text',
      label: 'last name',
      validateFor: 'none'
    },
    {
      type: 'text',
      label: 'user tag',
      validateFor: 'none'
    }
  ]
};
