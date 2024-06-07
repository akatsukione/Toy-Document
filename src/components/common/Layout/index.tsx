import React from 'react';
import {HeaderSection} from './Header';
import {FooterSection} from './Footer';
import { LayoutContainer } from './index.style';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent:React.FC<LayoutProps> = ({children}) => {
  return (
    <LayoutContainer>
      <HeaderSection/>
      {children}
      <FooterSection/>
    </LayoutContainer>
  )
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component/>
    </LayoutComponent>
  )
}
