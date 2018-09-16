import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './TweetList.scss';

import { ITweet } from '../../interfaces/tweet';
import { IStores } from '../../interfaces/stores';
import { TweetItem } from '../TweetItem';
import { CreateTweet } from '../CreateTweet';

export interface IAllTweetsProps {
  stores?: IStores
}

@inject("stores")
@observer
export class TweetList extends React.Component<IAllTweetsProps, {}> {
  constructor(props: IAllTweetsProps) {
    super(props);
  }

  componentWillMount() {
    this.props.stores.tweetsStore.fetchTweets();
  }

  render() {
    const {tweets} = this.props.stores.tweetsStore;
    return (
      <div className="tweets-list">
        <h1 className="tweets-list__title">
          Tweets <span className="tweets-list__count">{tweets.length}</span>
        </h1>
        <CreateTweet />
        <ul className="tweets-list__container">
          {tweets.map((item: ITweet) => (
            <TweetItem 
              key={item.id} 
              tweet={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}
