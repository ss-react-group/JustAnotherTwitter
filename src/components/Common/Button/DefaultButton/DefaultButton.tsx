import * as React from 'react';

import './DefaultButton.scss';

export const DefaultButton = (props: any) => (
  <button type="button" 
    className="button button--primary" 
    onClick={props.handleOnClick}
  >
    Tweet
  </button>
);
