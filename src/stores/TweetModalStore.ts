import { observable } from "mobx";
import { ITweet } from "../interfaces";

class TweetModal {
  @observable isOpen: boolean = false;
  @observable selectedTweet: ITweet
}

export const TweetModalStore = new TweetModal();