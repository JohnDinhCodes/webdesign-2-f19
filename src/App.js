import React from 'react';
import './App.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

// Class Components
import NavBar from './components/NavBar/nav-bar/nav-bar.component';

// Functional Components
import { SideMenu } from './components/NavBar/side-menu/side-menu.component';

setDefaultBreakpoints([{ xs: 0 }, { s: 376 }, { m: 426 }, { l: 1069 }]);

export const App = () => (
  <BreakpointProvider>
    <NavBar />
  </BreakpointProvider>
);
