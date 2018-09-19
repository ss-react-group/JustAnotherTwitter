import * as React from 'react';
import { Main } from './Main';
import { Side } from './Side';

import './Navigation.scss';

export interface Props {}

export const Navigation = () => (
  <header>
    <div className="container">
      <div className="navigation-grid">
        <Main />
        <Side />
      </div>
    </div>
  </header>
);
