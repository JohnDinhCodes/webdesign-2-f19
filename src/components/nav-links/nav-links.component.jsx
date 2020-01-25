import React from 'react';

import './nav-links.styles.css';

import { Link } from 'react-scroll';

export const NavLinks = props => {
  return (
    <ul className='nav-links'>
      {props.links.map(link => (
        <li key={link.target}>
          <Link to={link.target}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};
