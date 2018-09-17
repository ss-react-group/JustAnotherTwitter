import * as React from 'react';

import './JatLogo.scss';

export class JatLogo extends React.Component {
  readonly  state = {
    appName: 'JUST ANOTHER Twitter'
  };

  public render() {
    return (
        <ul className="logo">
          <li className="logo__item logo__github"><span>Github</span></li>
          <li className="logo__item logo__jat"><span>{this.state.appName}</span></li>
          <li className="logo__item logo__ss"><span>SoftServe</span></li>
        </ul>
    );
  }
}
