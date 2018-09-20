import { IDefaultForm } from '../../../interfaces/DefaultForm';
export const userLocationForm: IDefaultForm = {
  formTitle: 'Location',
  inputFields: [
    {
      type: 'date',
      label: '',
      validateFor: 'none',
      dbPropertyKey: 'birthday'
    }
  ]
};
