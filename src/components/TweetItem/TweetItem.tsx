import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TweetItem.scss';

import { IStores } from '../../interfaces';

export interface ITweetItemProps {
  tweet: any; // ITweet || IComment
  stores?: IStores;
  handleRemoveTweet?(event: any, tweetId: number): any;
}

@inject('stores')
@observer
export class TweetItem extends React.Component<ITweetItemProps, {}> {
  constructor(props: ITweetItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="tweet">
        {this.props.tweet.user && (
          <div className="tweet__header">
            <Link to={`/profile/${this.props.tweet.user.id}`}>
              <span className="tweet__user-name">
                {this.props.tweet.user.firstName}{' '}
                {this.props.tweet.user.lastName}
              </span>
            </Link>
            <span className="tweet__created">
              &#183;{' '}
              {new Intl.DateTimeFormat('en-GB', {
                month: 'short',
                day: '2-digit'
              }).format(new Date(this.props.tweet.user.createdAt))}
            </span>
            {this.props.handleRemoveTweet && (
              <span
                className="tweet__delete"
                onClick={e =>
                  this.props.handleRemoveTweet(e, this.props.tweet.id)
                }
              >
                Delete
              </span>
            )}
          </div>
        )}
        <div className="tweet__text">{this.props.tweet.content}</div>
        <div className="tweet__actions">
          {this.props.tweet.comments !== undefined && (
            <span className="tweet__action-item">
              <FontAwesomeIcon icon={faComment} className="tweet__icon" />
              {this.props.tweet.comments.length}
            </span>
          )}
          {this.props.tweet.likesCount !== undefined && (
            <span className="tweet__action-item">
              <FontAwesomeIcon icon={faHeart} className="tweet__icon" />
              {this.props.tweet.likesCount}
            </span>
          )}
        </div>
      </div>
    );
  }
}
