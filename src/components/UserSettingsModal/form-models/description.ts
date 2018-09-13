import { IDefaultForm } from '../../../interfaces/DefaultForm';

export const descriptionForm: IDefaultForm = {
  formTitle: 'Description',
  inputFields: [
    {
      type: 'textarea',
      label: 'tell us about yourself',
      validateFor: 'none',
      dbPropertyKey: 'description'
    }
  ]
};
