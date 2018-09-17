import * as React from 'react';
import './MainLayout.scss';
import { Navigation } from '../Navigation';
import { BackgroundImage } from '../BackgroundImage';
import { Info } from '../Info';
import { TweetList } from '../TweetList';
import { Followers } from '../Followers';
// import {UserSettingsModal} from "../UserSettingsModal";
import { ProgressBar } from '../ProgressBar';

export const MainLayout = () => (
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
