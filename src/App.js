import React from "react";

// Packages
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";

// Stylesheet
import "./App.css";

// Class Components
import NavBar from "./components/NavBar/nav-bar/nav-bar.component";

// Functional Components
setDefaultBreakpoints([{ xs: 0 }, { s: 426 }, { m: 768 }, { l: 1069 }]);

export const App = () => (
	<BreakpointProvider>
		<NavBar />
	</BreakpointProvider>
);
