import React, { Component } from 'react';

// Packages
import { Breakpoint } from 'react-socks';

// Stylesheet
import './nav-bar.styles.css';

// Components
import { LogoLink } from '../logo-link/logo-link.component';
import { NavLinks } from '../nav-links/nav-links.component';

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
  }
  render() {
    return (
      <nav className='nav-bar'>
        <LogoLink />
        <Breakpoint xl only>
          <NavLinks links={links} />
        </Breakpoint>
      </nav>
    );
  }
}
