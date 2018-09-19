import * as React from 'react';
import { Main } from './Main';
import { Side } from './Side';
import { Search } from '../Search';
import './Navigation.scss';

export interface Props {}

export const Navigation = () => (
  <header>
    <div className="container">
      <div className="navigation-grid">
        <Main />
        <Search />
        <Side />
      </div>
    </div>
  </header>
);
