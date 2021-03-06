import React from "react";

// Stylesheet
import "./hamburger-icon.styles.css";

export const HamburgerIcon = ({ handler, menuState }) => {
	return (
		<div
			className={`hamburger${menuState ? " active" : ""}`}
			onClick={handler}
		>
			<div />
			<div />
			<div />
		</div>
	);
};
