import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TweetItem.scss';

import { ITweet, IStores } from '../../interfaces';

export interface ITweetItemProps {
  tweet: ITweet,
  stores?: IStores
}

@inject("stores")
@observer
export class TweetItem extends React.Component<ITweetItemProps, {}> {
  constructor(props: ITweetItemProps) {
    super(props);
    this.handleRemoveTweet = this.handleRemoveTweet.bind(this);
  }

  handleRemoveTweet(event: any) {
    event.stopPropagation();
    this.props.stores.tweetsStore.removeTweet(this.props.tweet.id);
  }

  render() {
    return (
      <div className="tweet">
        <div className="tweet__header">
          <span className="tweet__user-name">{this.props.tweet.user.firstName}{' '}{this.props.tweet.user.lastName}</span>
          <span className="tweet__created">
            &#183;{' '}
            {new Intl.DateTimeFormat('en-GB', {
              month: 'short', 
              day: '2-digit' 
            }).format(new Date(this.props.tweet.user.createdAt))}
          </span>
          <span className="tweet__delete" onClick={this.handleRemoveTweet}>Delete</span>
        </div>
        <div className="tweet__text">{this.props.tweet.content}</div>
        <div className="tweet__actions">
          <span className="tweet__action-item">
            <FontAwesomeIcon icon={faComment} className="tweet__icon"/>
            {this.props.tweet.commentsCount}
          </span>
          <span className="tweet__action-item">
            <FontAwesomeIcon icon={faHeart} className="tweet__icon"/>
            {this.props.tweet.likesCount}
          </span>
        </div>
      </div>
    );
  }
}
