import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { uploadAsset } from '../../services';
import { IStores, IAsset } from '../../interfaces';

import './FileUpload.scss';

interface IFileUploadProps {
  background?: boolean;
  avatar?: boolean;
  stores?: IStores;
  inputData?: number;
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

  handleChangeFiles = (event: any) => {
    const { files } = event.target;

    this.props.stores.loadingIndicators.toggle();

    uploadAsset({
      userId: this.props.stores.userDetails.user.id,
      assetType: this.props.inputData,
      files
    }).then((result: IAsset) => {
      const { type } = result.assets_type;

      switch (type) {
        case 'avatar':
          this.props.stores.assets.avatar = result;
          break;
        case 'background':
          this.props.stores.assets.background = result;
        default:
          break;
      }

      this.props.stores.userDetails.get(this.props.stores.userDetails.user.id);
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
