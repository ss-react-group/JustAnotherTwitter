import * as React from 'react';
import { TweetList } from '../../components/TweetList';
import { Followers } from '../../components/Followers';

export const Home = () => (
  <React.Fragment>
    <TweetList />
    <Followers />
  </React.Fragment>
);
