import * as React from 'react';

import Avatar from '../Avatar/Avatar';

import './Info.scss';

const Info = () => (
  <div className="info">
    <div className="container">
      <div className="info__grid">
        <div className="info__description">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <Avatar source="https://api.adorable.io/avatars/285/abott@adorable.png" />

        <div className="info__userName">
          <h3 className="userName__name">John Smith</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
