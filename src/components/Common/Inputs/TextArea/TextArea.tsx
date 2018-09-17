import * as React from 'react';
import { ITextArea } from '../../../../interfaces/TextArea';
import './TextArea.scss';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../../../interfaces/stores';

export interface ITextAreaProps extends ITextArea {
  stores?: IStores
}

export interface ITextAreaState {
  charsLength: string;
}

@inject('stores')
@observer
export class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
  constructor(props: ITextAreaProps) {
    super(props);

    this.state = {
      charsLength: '0'
    };
  }

  handleChange = (event: any) => {
    const { value } = event.target;
    this.props.stores.textareaStore.content = value;

    const charsLength = value.length;

    this.setState({
      charsLength
    });
  };

  render() {
    return (
      <div className="text-area">
        <textarea 
          className="text-area__input" 
          maxLength={parseInt(this.props.maxChars, 10)}
          onChange={this.handleChange}
          value={this.props.stores.textareaStore.content}
        />
        <span className="text-area__input-chars-counter">
          {this.state.charsLength}/{this.props.maxChars}
        </span>
      </div>
    );
  }
}
