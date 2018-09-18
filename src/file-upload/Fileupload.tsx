import * as React from 'react';
import { Component } from 'react';

class Fileupload extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  handleFileinputChange = (event: any) => {
    const file = event.target.files[0];

    const formData = new FormData();

    formData.append('file', file);

    fetch('http://localhost:8081/api/v1/secured/file_upload/2/1', {
      method: 'POST',
      body: formData,
      headers: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImVtYWlsIjoiZnJhbmVrLnN0b2R1bHNraUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJGcmFuZWsiLCJsYXN0TmFtZSI6IlN0b2R1bHNraSIsImxvY2F0aW9uIjoiV3JvY2xhdywgUG9sYW5kIiwiYmlydGhkYXkiOiIxMS8xMS8xOTk2IiwidXBkYXRlZEF0IjoiMjAxOC0wOS0xOFQxMDozNDo1NC40MTdaIiwiY3JlYXRlZEF0IjoiMjAxOC0wOS0xOFQxMDozNDo1NC40MTdaIiwiaWF0IjoxNTM3MjY2ODk0LCJleHAiOjE1MzcyNzE4OTR9.u8ElPZJkrqRcRyseOZRU67tJkL0PW9fuKK0QZ9gvQwk'
      }
    })
      .then(jsonResponse => jsonResponse.json())
      .then(response => console.log(response));
  };

  render() {
    return (
      <div className="fileupload">
        <input
          type="file"
          name=""
          id=""
          onChange={this.handleFileinputChange}
        />
      </div>
    );
  }
}

export default Fileupload;
