import * as React from 'react';
import './App.scss';

import MainLayout from './components/Layouts/MainLayout';

import { getAsset } from './services/asset';
import { IAsset } from './interfaces/asset';
import { observer, inject } from 'mobx-react';

interface IAppProps {
  assets?: any;
}

@inject('assets')
@observer
class App extends React.Component<IAppProps, {}> {
  componentDidMount() {
    getAsset(1, 1).then((result: IAsset) => {
      this.props.assets.avatar = result;
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
