import * as React from 'react';

import './FileUploadDropdown.scss';

export class FileUploadDropdown extends React.Component {
  constructor(props: any) {
    super(props);
    this.fileInput = React.createRef();
    this.uploadFile = this.uploadFile.bind(this);
  }

  startUpload() {}
  uploadFile() {}

  render() {
    return (
      <div className="file-upload-dropdown">
        <ul className="file-upload-dropdown__list">
          <li>Upload file</li>
          <li>Cancel</li>
        </ul>
        <input
          id="fileUpload"
          type="file"
          // ref={this.fileInput}
          style={{ display: 'none' }}
          onChange={this.uploadFile}
        />
      </div>
    );
  }
}
