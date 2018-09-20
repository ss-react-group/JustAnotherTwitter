import * as React from 'react';
import { DefaultButton } from '../../Common/Button';
import { Search } from '../../Search';

import './Side.scss';

export const Side = () => (
  <div className="side-navigation">
    <Search />

    <DefaultButton />
  </div>
);
