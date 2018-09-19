import * as React from 'react';
import { Navigation } from '../Navigation';
import { BackgroundImage } from '../BackgroundImage';
import { Info } from '../Info';
import { ProgressBar } from '../ProgressBar';
import { IMainLayoutProps } from '../../interfaces';
import './MainLayout.scss';

export const MainLayout: React.SFC = (props: IMainLayoutProps) => (
  <React.Fragment>
    <ProgressBar />
    <Navigation />
    <BackgroundImage />
    <Info />
    <div className="content container">{props.children}</div>
  </React.Fragment>
);
