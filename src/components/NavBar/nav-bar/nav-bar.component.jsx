import React, { Component } from 'react';

// Packages
import { Breakpoint } from 'react-socks';

// Stylesheet
import './nav-bar.styles.css';

// Functional Components
import { LogoLink } from '../logo-link/logo-link.component';
import { NavLinks } from '../nav-links/nav-links.component';
import { HamburgerIcon } from '../hamburger-icon/hamburger-icon.component';
import { SideMenu } from '../side-menu/side-menu.component';
import { Backdrop } from '../../backdrop/backdrop.component';

/**
 * Text will be rendered by the DOM.
 * Example: <a href={links.href}>{links.text}<a/>
 *
 * Target is the name of the element you want to scroll to on click,
 * provided by the 'react-scroll' package.
 * Example: <Link to={links.target} /> on click will scroll to <element name={links.target} />
 * See https://github.com/fisshy/react-scroll for code examples
 */

const links = [
  { text: 'Home', target: 'home' },
  { text: 'Biography', target: 'biography' },
  { text: 'Discography', target: 'discography' },
  { text: 'Life', target: 'life' },
  { text: 'Legacy', target: 'legacy' },
  { text: 'Subscribe', target: 'subscribe' },
];
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
  }

  hamburgerHandler = e => {
    this.setState(prevState => {
      return { menu: !prevState.menu };
    });
  };

  render() {
    return (
      <header>
        <nav className='nav-bar'>
          <LogoLink />
          <Breakpoint l only>
            <NavLinks links={links} />
          </Breakpoint>
        </nav>
        <Breakpoint m down>
          <HamburgerIcon
            handler={this.hamburgerHandler}
            menuState={this.state.menu}
          />
          <SideMenu menuState={this.state.menu} links={links} />
          <Backdrop menuState={this.state.menu} />
        </Breakpoint>
      </header>
    );
  }
}
