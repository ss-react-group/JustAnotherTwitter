import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { uploadAsset } from '../../services';
import { IStores, IAsset } from '../../interfaces';

import './FileUploadDropdown.scss';

interface IFileUploadDropdown {
  background?: boolean;
  avatar?: boolean;
  stores?: IStores;
}

@inject('stores')
@observer
export class FileUploadDropdown extends React.Component<IFileUploadDropdown> {
  static defaultProps = {
    background: false,
    avatar: false
  };

  constructor(props: any) {
    super(props);
  }

  handleChangeFiles = (event: any) => {
    const { files } = event.target;

    const { background, avatar } = this.props;
    console.log(background, avatar);
    let assetType;
    if (avatar) {
      assetType = 1;
    } else if (background) {
      assetType = 2;
    }

    if (this.props.stores) {
      this.props.stores.loadingIndicators.toggle();
    }

    uploadAsset({
      assetType,
      files
    }).then((result: IAsset) => {
      if (this.props.stores) {
        if (avatar) {
          this.props.stores.assets.set('avatar', result.filePath);
        } else if (background) {
          this.props.stores.assets.set('background', result.filePath);
        }
        this.props.stores.loadingIndicators.toggle();
      }
    });
  };

  render() {
    return (
      <div
        className={`file-upload-dropdown ${
          this.props.avatar
            ? 'file-upload-dropdown--avatar'
            : 'file-upload-dropdown--background'
        }`}
      >
        <div className="file-upload-dropdown__message">Change image</div>

        <input
          id="fileUpload"
          className="file-upload"
          type="file"
          onChange={this.handleChangeFiles}
        />
      </div>
    );
  }
}
