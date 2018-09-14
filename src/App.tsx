import * as React from 'react';
import './App.scss';
import './assets/styles/common.scss';

import { MainLayout } from './components/Layouts/MainLayout';

import { getAsset } from './services/asset';
import { IAsset } from './interfaces/asset';
import { observer, inject } from 'mobx-react';
// import { UserSettingsModal } from './components/UserSettingsModal';

interface IAppProps {
  stores?: any;
}

@inject('stores')
@observer
export default class App extends React.Component<IAppProps, {}> {
  componentDidMount() {
    getAsset(2, 1).then((result: IAsset) => {
      this.props.stores.assets.set('avatar', result.filePath);
    });

    getAsset(2, 2).then((result: IAsset) => {
      this.props.stores.assets.set('background', result.filePath);
    });
  }

  render() {
    return (
      <div className="App">
        {/* <UserSettingsModal /> */}
        <MainLayout />
      </div>
    );
  }
}
