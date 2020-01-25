import React from "react";

// Packages
import { Link } from "react-scroll";

// Stylesheet
import "./nav-links.styles.css";

export const NavLinks = (props) => {
	return (
		<ul className='nav-links'>
			{props.links.map((link) => (
				<li key={link.target}>
					<Link to={link.target}>{link.text}</Link>
				</li>
			))}
		</ul>
	);
};
