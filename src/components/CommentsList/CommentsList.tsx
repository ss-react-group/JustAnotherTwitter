import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { CreateItem } from '../CreateItem';
import { IStores } from '../../interfaces';
import { TweetItem } from '../TweetItem';

import './CommentsList.scss';

export interface ICommentsListProps {
  stores?: IStores,
}

@inject("stores")
@observer
export class CommentsList extends React.Component<ICommentsListProps, {}> {
  constructor(props: ICommentsListProps) {
    super(props);
  }

  componentDidMount() {
    this.props.stores.commentsStore.fetchComments(
      this.props.stores.TweetModalStore.selectedTweet.id
    );
  }

  handleCreateComment = () => {
    this.props.stores.commentsStore.addComment(
      this.props.stores.TweetModalStore.selectedTweet.id, 
      this.props.stores.userDetails.user.id,
      this.props.stores.textareaStore.content
    )
    .then(() => 
      this.props.stores.textareaStore.setInitValue()
    );
  };

  handleRemoveComment = (event: any, commentId: number) => {
    event.stopPropagation();
    this.props.stores.commentsStore.removeComment(
      this.props.stores.TweetModalStore.selectedTweet.id,
      commentId
    );
  }

  render() {
    return (
      <div className="comments-list">
        <CreateItem
          handleCreateItem={this.handleCreateComment} 
          buttonText='Comment'
        />
        {this.props.stores.commentsStore.comments && this.props.stores.commentsStore.comments.map(item => (
          <TweetItem 
            key={item.id} 
            tweet={item} 
            handleRemoveTweet={this.handleRemoveComment}
          />
        ))}
      </div>
    );
  }
}