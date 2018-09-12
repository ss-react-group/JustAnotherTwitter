import * as React from 'react';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TweetItem.scss';

import { ITweet } from '../../interfaces';

export interface ITweetItemProps {
  tweet: ITweet,
}

export class TweetItem extends React.Component<ITweetItemProps, {}> {
  constructor(props: ITweetItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="tweet">
        <div className="tweet__header">
          <span className="tweet__user-name">{this.props.tweet.user.firstName}{' '}{this.props.tweet.user.firstName}</span>
          <span className="tweet__created">
            &#183;{' '}
            {new Intl.DateTimeFormat('en-GB', {
              month: 'short', 
              day: '2-digit' 
            }).format(new Date(this.props.tweet.user.createdAt))}
          </span>
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
