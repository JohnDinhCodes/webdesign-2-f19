import React from "react";
import "./App.css";
import {
	Breakpoint,
	BreakpointProvider,
	setDefaultBreakpoints
} from "react-socks";
import { DesktopNavBar } from "./components/nav-bar/desktop/desktop-nav-bar.component";

setDefaultBreakpoints([
	{ xs: 0 },
	{ s: 376 },
	{ m: 426 },
	{ l: 769 },
	{ xl: 1069 }
]);

export const App = () => (
	<BreakpointProvider>
		<Breakpoint xl up>
			<header>
				<DesktopNavBar />
			</header>
		</Breakpoint>
	</BreakpointProvider>
);
