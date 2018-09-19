import * as React from 'react';
import { Navigation } from '../../components/Navigation';
import { BackgroundImage } from '../../components/BackgroundImage';
import { Info } from '../../components/Info';
import { TweetList } from '../../components/TweetList';
import { Followers } from '../../components/Followers';
import { ProgressBar } from '../../components/ProgressBar';
import './Home.scss';

export const Home = () => (
  <React.Fragment>
    <ProgressBar />
    <Navigation />
    <BackgroundImage />
    <Info />
    <div className="content container">
      <TweetList />
      <Followers />
    </div>
  </React.Fragment>
);
