import * as React from 'react';

import './Slogan.scss';

export class Slogan extends React.Component {
  readonly  state = {
    slogan: 'Stay connected.'
  };

  public render() {
    return (
      <div className="slogan">
        <h1>{this.state.slogan}</h1>
      </div>
    );
  }
}

