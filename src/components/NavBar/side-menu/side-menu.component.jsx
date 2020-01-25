import React from "react";

// Packages
import { Breakpoint } from "react-socks";

// Stylesheet
import "./side-menu.styles.css";

// Functional Components
import { NavLinks } from "../nav-links/nav-links.component";
import { LogoLink } from "../logo-link/logo-link.component";

export const SideMenu = ({ menuState, links }) => {
	return (
		<nav className={`side-menu${menuState ? " active" : ""}`}>
			<Breakpoint m down>
				<LogoLink />
			</Breakpoint>
			<NavLinks links={links} />
		</nav>
	);
};
