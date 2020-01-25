import React from 'react';
import './App.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

// Class Components
import NavBar from './components/nav-bar/nav-bar.component';

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1069 },
]);

export const App = () => (
  <BreakpointProvider>
    <header>
      <NavBar />
    </header>
  </BreakpointProvider>
);
