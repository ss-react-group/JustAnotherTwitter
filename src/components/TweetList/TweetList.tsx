import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './TweetList.scss';

import { ITweet } from '../../interfaces/tweet';
import { IStores } from '../../interfaces/stores';
import { TweetItem } from '../TweetItem';
import { CreateItem } from '../CreateItem';

export interface IAllTweetsProps {
  stores?: IStores;
  userId?: any;
}

@inject('stores')
@observer
export class TweetList extends React.Component<IAllTweetsProps, {}> {
  constructor(props: IAllTweetsProps) {
    super(props);
    this.tweetItemClick = this.tweetItemClick.bind(this);
  }

  componentWillMount() {
    if (this.props.userId) {
      this.props.stores.tweetsStore.fetchTweets(this.props.userId);
    } else {
      this.props.stores.tweetsStore.fetchTweets();
    }
  }

  tweetItemClick(event: any, selectedTweet: ITweet) {
    event.stopPropagation();
    this.props.stores.TweetModalStore.isOpen = true;
    this.props.stores.TweetModalStore.selectedTweet = selectedTweet;
  }

  handleCreateTweet = () => {
    this.props.stores.tweetsStore
      .addTweet(
        this.props.stores.userDetails.user.id,
        this.props.stores.textareaStore.content
      )
      .then(() => this.props.stores.textareaStore.setInitValue());
  };

  render() {
    const { tweets } = this.props.stores.tweetsStore;
    return (
      <div className="tweets-list">
        <h1 className="tweets-list__title">
          Tweets <span className="tweets-list__count">{tweets.length}</span>
        </h1>
        <CreateItem handleCreateItem={this.handleCreateTweet} />
        <ul className="tweets-list__container">
          {tweets.map((item: ITweet) => (
            <div key={item.id} onClick={e => this.tweetItemClick(e, item)}>
              <TweetItem key={item.id} tweet={item} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
