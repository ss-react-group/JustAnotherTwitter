import * as React from 'react';
import './CreateItem.scss';

import { DefaultButton } from '../Common/Button';
import { TextArea } from '../Common/Inputs';

export const CreateItem = (props: any) => (
  <div className="create-item">
    <TextArea 
      maxChars={props.maxChars || '150'}
    />
    <div>
      <DefaultButton 
        handleOnClick={props.handleCreateItem}
        buttonText={props.buttonText}
      />
    </div>
  </div>
);
