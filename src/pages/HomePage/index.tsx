import React from 'react';
import { HomePageView} from 'components';
import { WithLayout } from 'components';

export const HomePage: React.FC = WithLayout(() => {
  return <HomePageView />
});