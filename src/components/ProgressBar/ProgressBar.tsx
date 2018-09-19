import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces';
import './ProgressBar.scss';

interface IProgressBar {
  stores?: IStores;
}

@inject('stores')
@observer
export class ProgressBar extends React.Component<IProgressBar> {
  render() {
    return (
      <React.Fragment>
        {this.props.stores.loadingIndicators.top && (
          <div className="progress-bar" />
        )}
      </React.Fragment>
    );
  }
}
