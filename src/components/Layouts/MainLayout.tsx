import * as React from 'react';

import './MainLayout.scss';
import Navigation from '../Navigation/Navigation';
import BackgroundImage from '../BackgroundImage';
import Info from '../Info/Info';
import TweetList from '../TweetList/TweetList';
import Followers from '../Followers';

export interface Props {}

const MainLayout = () => (
  <React.Fragment>
    <Navigation />
    <BackgroundImage source="/background.jpg" />
    <Info />

    <div className="content container">
      <TweetList />
      <Followers />
    </div>
  </React.Fragment>
);

export default MainLayout;
