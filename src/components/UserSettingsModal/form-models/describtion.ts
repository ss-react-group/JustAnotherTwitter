import { IDefaultForm } from '../../common/forms/DefaultForm/DefaultForm.interface';

export const describtionForm: IDefaultForm = {
  formTitle: 'Describtion',
  inputFields: [
    {
      type: 'textarea',
      label: 'tell us about yourself',
      validateFor: 'none'
    }
  ]
};
