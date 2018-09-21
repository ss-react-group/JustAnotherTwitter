import * as React from 'react';
import { Navigation } from '../Navigation';
import { BackgroundImage } from '../BackgroundImage';
import { Info } from '../Info';
import { ProgressBar } from '../ProgressBar';
import { IMainLayoutProps } from '../../interfaces';
import './MainLayout.scss';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
export class MainLayout extends React.Component<IMainLayoutProps> {
  render() {
    return (
      <React.Fragment>
        <ProgressBar />
        <Navigation />
        <BackgroundImage upload={this.props.stores.userDetails.canUpload} />
        <Info />
        <div className="content container">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
