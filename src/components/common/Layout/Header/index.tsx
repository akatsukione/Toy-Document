import React from 'react';
import { HeaderContainer } from './index.style';
import { MenuBtnComponent } from 'components';

export const HeaderSection: React.FC = () => {
  // const aa = (<Link to = {'label'}>Toy Document labeling</Link>);
  return (
    <HeaderContainer>
      <MenuBtnComponent titles = {["Toy Document labeling"]}>
      </MenuBtnComponent>
      <MenuBtnComponent titles = {["Home", "Documents"]}>
      </MenuBtnComponent>
    </HeaderContainer>
  )
}