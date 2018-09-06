import * as React from 'react';
import { Component } from 'react';

class User extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="User">
        <h1>User Component</h1>
      </div>
    );
  }
}

export default User;
