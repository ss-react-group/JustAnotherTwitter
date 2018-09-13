import * as React from 'react';

import './FileUploadDropdown.scss';

export class FileUploadDropdown extends React.Component {
  constructor(props: any) {
    super(props);
  }
  handleChangeFiles = (event: any) => {
    const { files } = event.target;
    const formData = new FormData();
    formData.append('file', files[0]);

    fetch(
      'https://react-academy.herokuapp.com/api/v1/secured/file_upload/2/1',
      {
        method: 'POST',
        body: formData
      }
    )
      .then(jsonResponse => jsonResponse.json())
      .then(response => console.log(response));
  };

  render() {
    return (
      <div className="file-upload-dropdown">
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
