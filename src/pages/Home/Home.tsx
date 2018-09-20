import * as React from 'react';
import { TweetList } from '../../components/TweetList';
import { Followers } from '../../components/Followers';
import { TweetModal } from '../../components/TweetModal';

export const Home = () => (
  <React.Fragment>
    <TweetList />
    <Followers />
    <TweetModal />
  </React.Fragment>
);
