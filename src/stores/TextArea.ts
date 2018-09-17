import { observable, action } from "mobx";

class TextArea {
  initValue = '';
  @observable content: string = this.initValue;

  @action
  setInitValue() {
    this.content = this.initValue;
  }
}

export const textareaStore = new TextArea();