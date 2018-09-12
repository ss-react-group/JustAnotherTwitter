import * as React from 'react';
import './App.scss';

import MainLayout from './components/Layouts/MainLayout';

import { getAsset } from './services/asset';
import { IAsset } from './interfaces/asset';
import { observer, inject } from 'mobx-react';

interface IAppProps {
  stores?: any;
}

@inject('stores')
@observer
class App extends React.Component<IAppProps, {}> {
  componentDidMount() {
    getAsset(2, 1).then((result: IAsset) => {
      this.props.stores.assets.avatar.filePath = `http://localhost:8081/${result.filePath}`;
    });
  }

  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
