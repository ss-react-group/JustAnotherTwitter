import * as React from 'react';
import { Component } from 'react';

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <h1>Home Component</h1>
      </div>
    );
  }
}

export default Home;
