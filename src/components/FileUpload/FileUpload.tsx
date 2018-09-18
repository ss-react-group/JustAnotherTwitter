import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { uploadAsset } from '../../services';
import { IStores, IAsset } from '../../interfaces';

import './FileUpload.scss';

interface IFileUploadProps {
  background?: boolean;
  avatar?: boolean;
  stores?: IStores;
  inputData?: any;
}

interface IFileUploadState {}

@inject('stores')
@observer
export class FileUpload extends React.Component<
  IFileUploadProps,
  IFileUploadState
> {
  static defaultProps: IFileUploadProps = {
    background: false,
    avatar: false
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.inputData);
  }
  handleChangeFiles = (event: any) => {
    const { files } = event.target;

    const { background, avatar } = this.props;
    let assetType;
    if (avatar) {
      assetType = 1;
    } else if (background) {
      assetType = 2;
    }

    this.props.stores.loadingIndicators.toggle();

    uploadAsset({
      assetType,
      files
    }).then((result: IAsset) => {
      if (avatar) {
        this.props.stores.assets.set('avatar', result.filePath);
      } else if (background) {
        this.props.stores.assets.set('background', result.filePath);
      }
      this.props.stores.loadingIndicators.toggle();
    });
  };

  render() {
    return (
      <div
        className={`file-upload ${
          this.props.avatar ? 'file-upload--avatar' : 'file-upload--background'
        }`}
      >
        <div className="file-upload__message">Change image</div>

        <input
          id="fileUpload"
          className="file-upload__input"
          type="file"
          onChange={this.handleChangeFiles}
        />
      </div>
    );
  }
}
