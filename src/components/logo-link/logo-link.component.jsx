import React from "react";
import LogoIcon from "../../images/logo.svg";
import LogoText from "../../images/logotype.svg";

import "./logo-link.styles.css";

import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from "react-scroll";

export const LogoLink = () => (
	<Link className='logo-link' to={"home"}>
		<img className='logo-icon' src={LogoIcon} />
		<img className='logo-text' src={LogoText} />
		<span
			style={{
				visibility: "hidden",
				position: "absolute"
			}}
		>
			Alice Cortane
		</span>
	</Link>
);
