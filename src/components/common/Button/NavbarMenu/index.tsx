import React from 'react'
import {MenuBtnContainer} from './index.style';
import { Link } from 'react-router-dom';

interface MenubarBtnProps {
  titles: string[];
}
export const MenuBtnComponent: React.FC<MenubarBtnProps> = ({titles}) => {
  return (
    <MenuBtnContainer>
      {
        titles.map(title => {
          return (<Link to = {'/home'} key={title}>{title}</Link>)
          // return (<Link to = {'/home'}>{title}</Link>)
        })
      }
    </MenuBtnContainer>
  )
}
