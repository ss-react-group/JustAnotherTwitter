import * as React from 'react';
import './CreateTweet.scss';

import { DefaultButton } from '../Common/Button';

export class CreateTweet extends React.Component {
  render () {
    return (
      <div className="content__create-tweet">
        <textarea className="content__create-tweet-textarea"></textarea>
        <div>
          <DefaultButton />
        </div>
      </div>
    );
  }
}
