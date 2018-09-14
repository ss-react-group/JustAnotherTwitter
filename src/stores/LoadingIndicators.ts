import { observable, action } from 'mobx';

export class LoadingIndicators {
  @observable
  top: boolean = false;

  @action
  toggle() {
    this.top = !this.top;
  }
}

export const loadingIndicators = new LoadingIndicators();
