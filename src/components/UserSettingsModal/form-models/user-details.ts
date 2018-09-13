import { IDefaultForm } from '../../../interfaces/DefaultForm';
export const userDetailsForm: IDefaultForm = {
  formTitle: 'User Details',
  inputFields: [
    {
      type: 'text',
      label: 'email',
      validateFor: 'email',
      dbPropertyKey: 'email'
    },
    {
      type: 'text',
      label: 'first name',
      validateFor: 'none',
      dbPropertyKey: 'firstName'
    },
    {
      type: 'text',
      label: 'last name',
      validateFor: 'none',
      dbPropertyKey: 'lastName'
    },
    {
      type: 'text',
      label: 'last name',
      validateFor: 'none',
      dbPropertyKey: 'lastName'
    }
  ]
};
