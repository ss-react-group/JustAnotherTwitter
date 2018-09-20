import * as React from 'react';
import * as Modal from 'react-modal';
import './TweetModal.scss';

import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces';
import { TweetItem } from '../TweetItem';
import { CommentsList } from '../CommentsList';

export interface IAllTweetsProps {
  stores?: IStores
}

@inject("stores")
@observer
export class TweetModal extends React.Component<IAllTweetsProps, {}> {
  constructor(props: IAllTweetsProps) {
    super(props);
  }

  handleCloseModal = () => {
    this.props.stores.TweetModalStore.isOpen = false;
  }

  handleRemoveTweet = (event: any, tweetId: number) => {
    event.stopPropagation();
    this.props.stores.tweetsStore.removeTweet(tweetId);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.stores.TweetModalStore.isOpen}
        className="tweet-modal"
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <TweetItem 
          tweet={this.props.stores.TweetModalStore.selectedTweet}
          handleRemoveTweet={this.handleRemoveTweet}
        />
        <CommentsList />
      </Modal>
    );
  }
};