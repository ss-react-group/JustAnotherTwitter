import { IDefaultForm } from '../../../interfaces/default-form';

export const descriptionForm: IDefaultForm = {
  formTitle: 'Description',
  inputFields: [
    {
      type: 'textarea',
      label: 'tell us about yourself',
      validateFor: 'none'
    }
  ]
};
