import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './ProgressBar.scss';
import { IStores } from '../../interfaces';

interface IProgressBar {
  stores?: IStores;
}

@inject('stores')
@observer
export class ProgressBar extends React.Component<IProgressBar> {
  render() {
    return (
      <React.Fragment>
        {this.props.stores &&
          this.props.stores.loadingIndicators.top && (
            <div className="progress-bar" />
          )}
      </React.Fragment>
    );
  }
}
