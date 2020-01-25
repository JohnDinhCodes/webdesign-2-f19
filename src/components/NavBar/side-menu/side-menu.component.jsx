import React from 'react';
import { NavLinks } from '../nav-links/nav-links.component';

import './side-menu.styles.css';

export const SideMenu = ({ menuState, links }) => {
  return (
    <nav className={`side-menu${menuState ? ' active' : ''}`}>
      <NavLinks links={links} />
    </nav>
  );
};
