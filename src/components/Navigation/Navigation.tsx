import * as React from 'react';
import { MainNavigation } from '../MainNavigation';
import { SideNavigation } from '../SideNavigation';
import { Search } from '../Search';

import './Navigation.scss';

export interface Props {}

export const Navigation = () => (
  <header>
    <div className="container">
      <div className="navigation-grid">
        <MainNavigation />
        <Search />
        <SideNavigation />
      </div>
    </div>
  </header>
);
