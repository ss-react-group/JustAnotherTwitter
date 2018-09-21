import * as React from 'react';
import { Search } from '../../Search';
import { UserSettings } from '../../UserSettings';
import './Side.scss';

export const Side = () => (
  <div className="side-navigation">
    <Search />
    <UserSettings />
  </div>
);
