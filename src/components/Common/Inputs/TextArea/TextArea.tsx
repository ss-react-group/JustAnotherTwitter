import * as React from 'react';
import { ITextArea } from '../../../../interfaces/TextArea';
import './TextArea.scss';
export interface ITextAreaProps extends ITextArea {}

export interface ITextAreaState {
  charsLength: string;
}

export class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
  constructor(props: ITextAreaProps) {
    super(props);

    this.state = {
      charsLength: '0'
    };
  }

  handleChange = (event: any) => {
    const { value } = event.target;

    const charsLength = value.length;

    this.setState({
      charsLength
    });
  };
  render() {
    return (
      <div className="text-area">
        <textarea className="text-area__input" onChange={this.handleChange} />
        <span className="text-area__input-chars-counter">
          {this.state.charsLength}/{this.props.maxChars}
        </span>
      </div>
    );
  }
}
