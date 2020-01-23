import React from "react";
import "./desktop-nav-bar.styles.css";

import { LogoLink } from "../../logo-link/logo-link.component";

import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from "react-scroll";

export const DesktopNavBar = () => (
	<nav className='nav-bar'>
		<LogoLink />
		<ul className='nav-links'>
			<li>
				<Link to={"home"}>Home</Link>
			</li>
			<li>
				<Link to={"biography"}>Biography</Link>
			</li>
			<li>
				<Link to={"discography"}>Discography</Link>
			</li>
			<li>
				<Link to={"life"}>Life</Link>
			</li>
			<li>
				<Link to={"legacy"}>Legacy</Link>
			</li>
			<li>
				<Link to={"subscribe"}>Subscribe</Link>
			</li>
		</ul>
	</nav>
);
