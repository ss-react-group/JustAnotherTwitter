import * as React from 'react';
import { inject } from 'mobx-react';

import { IStores } from '../../interfaces';
import { host } from '../../env/environment';

import './FileUploadDropdown.scss';

interface IFileUploadDropdown {
  background?: boolean;
  avatar?: boolean;
  stores?: IStores;
}

@inject('stores')
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
    const formData = new FormData();
    formData.append('file', files[0]);

    const { background, avatar } = this.props;

    let assetType;
    if (background) {
      assetType = 2;
    }

    if (avatar) {
      assetType = 1;
    }

    if (this.props.stores) {
      this.props.stores.loadingIndicators.toggle();
    }

    fetch(
      `https://react-academy.herokuapp.com/api/v1/secured/file_upload/2/${assetType}`,
      {
        method: 'POST',
        body: formData
      }
    )
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        console.log(response);
        console.log(this.props);
        if (this.props.background) {
          if (this.props.stores) {
            this.props.stores.assets.background.filePath = `${host}${
              response.filePath
            }`;
            console.log(this.props.stores.assets);
          }
          // this.props.stores.assets.background.filePath = response.filePath;
        } else {
          if (this.props.stores) {
            this.props.stores.assets.avatar.filePath = `${host}${
              response.filePath
            }`;
          }
          // this.props.stores.assets.avatar.filePath = response.filePath;
        }

        if (this.props.stores) {
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
